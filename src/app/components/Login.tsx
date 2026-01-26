import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, loading: authLoading } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/main");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center bg-blue-100">
      <div className="flex-1 flex justify-center">
        <Card className="w-full max-w-md hover:shadow-lg hover:scale-105 transition-all duration-300 bg-blue-300">
          <CardHeader>
            <CardTitle className="font-bold text-white">Login to continue</CardTitle>
            <CardDescription>
              Enter your credentials to access the app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                <b>{loading ? "Logging in..." : "Login"}</b>
              </Button>
              <p className="text-center text-sm text-gray-600 mt-2">''trouble signing in?''</p>
              <div className="flex space-x-2 mt-2">
                <Button type="button" className="flex-1" variant="outline" size="sm">
                  <img src="/src/assets/googleicon.png" alt="Google" className="w-4 h-4 mr-2" />
                  Sign in with Google
                </Button>
                <Button type="button" className="flex-1" variant="outline" size="sm">
                  <img src="/src/assets/fbicon.png" alt="Facebook" className="w-4 h-4 mr-2" />
                  Sign in with Facebook
                </Button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">
                not a member?{" "}
                <span
                  className="text-orange-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/signup")}
                >
                  Signup here
                </span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/src/assets/Capturennnn.PNG" alt="Login Image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
