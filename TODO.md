# Firebase Authentication Implementation

- [x] Update firebase.ts: Add Auth initialization and export auth functions (signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged)
- [x] Create AuthContext.tsx: Context for managing user state and auth methods
- [x] Update Login.tsx: Replace handleLogin with Firebase auth, add error/loading states
- [x] Update Signup.tsx: Replace handleSignup with Firebase auth, add error/loading states
- [x] Update App.tsx: Wrap with AuthProvider

# Logout Functionality Implementation

- [x] Update Navbar.tsx: Import useAuth and useNavigate, add logout button that calls logout() and navigates to "/"
