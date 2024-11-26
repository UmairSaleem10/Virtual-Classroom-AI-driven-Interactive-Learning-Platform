export default function Login() {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-primaryYellow mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryYellow"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryYellow"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primaryYellow text-white font-bold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-primaryYellow font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    );
  }
  