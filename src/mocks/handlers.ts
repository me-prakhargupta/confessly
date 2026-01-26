import { http, HttpResponse } from "msw";

export const handlers = [
  // ✅ Signup Mock
  http.post("http://localhost:5000/api/v1/auth/signup", async ({ request }) => {
    const body = await request.json();

    // optional validation
    const { email, password, fullname, username } = body as any;

    if (!email || !password || !fullname || !username) {
      return HttpResponse.json(
        { statusCode: 400, message: "All fields are required (mock)" },
        { status: 400 }
      );
    }

    // ✅ success response
    return HttpResponse.json(
      {
        statusCode: 200,
        message: "Signup successful (mock)",
        data: {
          user: {
            _id: "mock_user_id_123",
            email,
            fullname,
            username,
          },
        },
      },
      { status: 200 }
    );
  }),

  // ✅ Signin Mock
  http.post("http://localhost:5000/api/v1/auth/signin", async ({ request }) => {
    const body = await request.json();
    const { email, password } = body as any;

    if (!email || !password) {
      return HttpResponse.json(
        { statusCode: 400, message: "Email & password required (mock)" },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      {
        statusCode: 200,
        message: "Signin successful (mock)",
        data: {
          user: {
            _id: "mock_user_id_123",
            email,
            fullname: "Mock User",
            username: "mock_user",
          },
        },
      },
      { status: 200 }
    );
  }),
];
