const { connect } = require("@/dbConfig/dbConfig");
const { NextResponse } = require("next/server");
const { getDataFromToken } = require("@/helper/getDataFromToken");
const User = require("@/models/userModel");

connect();

async function GET(request) {
    try {
        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        const user = await User.findOne({ _id: userId }).select("-password");

        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

module.exports = GET;
