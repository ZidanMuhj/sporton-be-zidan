import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { upload } from "../middlewares/upload.middleware";
import { authenticate } from "../middlewares/auth.middleware";

// ... import lainnya tetap sama

const router = Router();

// TAMBAHKAN upload.single("image") DI SINI
router.post("/", authenticate, upload.single("image"), createCategory); 

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticate, upload.single("image"), updateCategory);
router.delete("/:id", authenticate, deleteCategory);

// const router = Router();

// router.post("/", authenticate, createCategory);
// router.get("/", getCategories);
// router.get("/:id", getCategoryById);
// router.put("/:id", authenticate, upload.single("image"), updateCategory);
// router.delete("/:id", authenticate, deleteCategory);

export default router;
