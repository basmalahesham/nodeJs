import { ObjectId } from "mongodb";
import { Student } from "../../db/models/student.model.js";

// Add Students
export const addStudents = async (req, res, next) => {
  try {
    const result = await Student.insertMany(req.body);

    if (result.length === 0) {
      return res
        .status(400)
        .json({ message: "No students added", success: false });
    }

    return res.status(201).json({
      message: "Students added successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Get Students enrolled in Math & age > 18
export const getStudentsEnrolledInMath = async (req, res, next) => {
  try {
    const students = await Student.find({
      subjects: "Math",
      age: { $gt: 18 },
      isEnrolled: true,
    }).toArray();

    if (!students.length) {
      return res
        .status(404)
        .json({ message: "No matching students found", success: false });
    }

    return res.status(200).json({
      message: "Students fetched successfully",
      success: true,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update enrollment status
export const updateEnrollment = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await Student.updateOne(
      { _id: new ObjectId(id) },
      { $set: { isEnrolled: true } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        message: "Student not found or already enrolled",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Enrollment updated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Aggregate avg age by isEnrolled
export const getAverageAgeByEnrollment = async (req, res, next) => {
  try {
    const result = await Student.aggregate([
      {
        $group: {
          _id: "$isEnrolled",
          averageAge: { $avg: "$age" },
        },
      },
    ]).toArray();

    if (!result.length) {
      return res.status(404).json({ message: "No data found", success: false });
    }

    return res.status(200).json({
      message: "Average age calculated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete students not enrolled
export const deleteNotEnrolledStudents = async (req, res, next) => {
  try {
    const result = await Student.deleteMany({ isEnrolled: false });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "No inactive students found to delete",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Inactive students deleted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};
