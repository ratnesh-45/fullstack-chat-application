import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "neha@example.com",
    fullName: "Neha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "shimaran@example.com",
    fullName: "Shimaran",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "priyanka@example.com",
    fullName: "Priyanka",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "khushi@example.com",
    fullName: "Khushi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "rani@example.com",
    fullName: "Rani",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "shivani@example.com",
    fullName: "Shivani",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "samma@example.com",
    fullName: "Samma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "tannu@example.com",
    fullName: "Tannu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "abhishek@example.com",
    fullName: "Abhishek",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rohit@example.com",
    fullName: "Rohit",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "rahul@example.com",
    fullName: "Rahul",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sharvan@example.com",
    fullName: "Sharvan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "shubham@example.com",
    fullName: "Shubham",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "raushan@example.com",
    fullName: "Raushan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "sachin@example.com",
    fullName: "Sachin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();