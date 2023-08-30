import express from 'express';
import { OfferedCoursesController } from './offeredCourse.controller';

const router = express.Router();

router.post('/', OfferedCoursesController.insertIntoDB);

export const offeredCourseRoutes = router;
