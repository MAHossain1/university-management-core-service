import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.patch('/:id', CourseController.updateOneInDB);

router.post('/:id/assign-faculties', CourseController.assignFaculties);
router.delete('/:id/remove-faculties', CourseController.removeFaculties);

router.get('/', CourseController.getAllData);

router.post('/', CourseController.insertIntoDB);

// router.get('/', BuildingController.getAllFromDB);

export const CourseRoutes = router;
