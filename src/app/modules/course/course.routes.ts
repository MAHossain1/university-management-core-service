import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validations';

const router = express.Router();

router.patch('/:id', CourseController.updateOneInDB);

router.post(
  '/:id/assign-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  CourseController.assignFaculties
);

router.delete(
  '/:id/remove-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  CourseController.removeFaculties
);

router.get('/', CourseController.getAllData);

router.post('/', CourseController.insertIntoDB);

// router.get('/', BuildingController.getAllFromDB);

export const CourseRoutes = router;
