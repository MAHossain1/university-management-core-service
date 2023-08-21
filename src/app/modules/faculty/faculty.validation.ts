import { z } from 'zod';

const create = z.object({
  body: z.object({
    facultyId: z.string({
      required_error: 'title is required',
    }),
    firstName: z.string({
      required_error: 'First Name is required',
    }),
    lastName: z.string({
      required_error: 'Last Name is required',
    }),
    middleName: z.string({
      required_error: 'Middle Name is required',
    }),
    profileImage: z.string({
      required_error: 'Profile Image is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required',
    }),
    gender: z.string({
      required_error: 'gender is required',
    }),
    bloodGroup: z.string({
      required_error: 'bloodGroup is required',
    }),
    designation: z.string({
      required_error: 'designation is required',
    }),
  }),
});

export const FacultyValidation = {
  create,
};
