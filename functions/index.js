const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure the email transporter (using Gmail as example)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: functions.config().email.user, // Set via firebase functions:config:set email.user="your-email@gmail.com"
    pass: functions.config().email.pass  // Set via firebase functions:config:set email.pass="your-app-password"
  }
});

// Cloud Function triggered when a new booking is added
exports.sendBookingNotification = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate(async (snap, context) => {
    const booking = snap.data();

    const mailOptions = {
      from: functions.config().email.user,
      to: functions.config().email.user, // Send to yourself or a specific email
      subject: 'New Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Service:</strong> ${booking.service}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Timestamp:</strong> ${booking.timestamp.toDate()}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Booking notification email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }

    return null;
  });
