import mongoose from "mongoose";
const { connect } = mongoose;

connect(process.env.NODE_MONGODB_CONNECT);

