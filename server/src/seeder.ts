import dotenv from "dotenv";
import users from "./data/users";
import countries from "./data/countries";
import User from "./models/User";
import Country from "./models/Country";
import connectDB from "./config/db";

dotenv.config({});

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Country.deleteMany();

    const createdUsers = await User.insertMany(users);

    await Country.insertMany(countries);

    console.log("Data Imported");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Country.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
