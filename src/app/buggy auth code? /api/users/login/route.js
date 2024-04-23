const { connect } = require("../../../dbConfig/dbConfig");
const User = require("../../../models/user");
const { NextRequest, NextResponse } = require("next/server");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

connect();
// Calls the connect function to establish a connection to the database.

async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        //check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        //create token data
        // A JavaScript object (tokenData) is created to store essential user 
        // information. In this case, it includes the user's unique identifier (id), 
        // username, and email.
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create a token with expiration of 1 day
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        // Create a JSON response indicating successful login
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        // Set the token as an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const logout = async () => {
    try {
        await axios.get('/api/users/logout');
        router.push('/login')
    } catch (error) {
        console.log(error.message)
        
    }

}

// This function handles HTTP GET requests to the API route.

async function GET(request) {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

module.exports = GET;


module.exports = POST;
