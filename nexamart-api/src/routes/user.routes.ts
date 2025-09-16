import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Create user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    console.log("Received data:", { name, email, password, role });

    // Validate the role
    if (!["buyer", "seller"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Check for existing user with the same email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("User with this email already exists:", existingUser);
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create the new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // ⚠️ Make sure to hash this password before saving in production
        role,
      },
    });

    console.log("User created:", user);
    res.status(201).json(user);

    // Log existing users for debugging
    const users = await prisma.user.findMany();
    console.log("Existing users:", users);

  } catch (err: any) {
    console.error("Error creating user:", err); // Log the error
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err: any) {
    console.error("Error fetching users:", err); // Log the error
    res.status(500).json({ error: err.message });
  }
});

export const userRoutes = router;
