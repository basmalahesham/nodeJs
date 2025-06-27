import { Router } from "express";
import * as studentService from "./student.service.js";

const router = Router();

router.post("/", studentService.addStudents); // POST /students
router.get("/", studentService.getStudentsEnrolledInMath); // GET /students
router.patch("/update-enrollment/:id", studentService.updateEnrollment); // PATCH
router.get("/aggregate", studentService.getAverageAgeByEnrollment); // GET
router.delete("/enrollment", studentService.deleteNotEnrolledStudents); // DELETE

export default router;
