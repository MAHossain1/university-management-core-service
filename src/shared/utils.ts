import { weekDays } from '@prisma/client';

export const asyncForEach = async (array: any[], callback: any) => {
  if (!Array.isArray(array)) {
    throw new Error('expected an array');
  }
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export const hasTimeConflict = (
  existingSlots: {
    startTime: string;
    endTime: string;
    dayOfWeek: weekDays;
  }[],
  newSlot: {
    startTime: string;
    endTime: string;
    dayOfWeek: weekDays;
  }
) => {
  for (const slot of existingSlots) {
    const existingStart = new Date(`2002-02-14 ${slot.startTime}:00`);
    const existingEnd = new Date(`2002-02-14 ${slot.endTime}:00`);
    const newStart = new Date(`2002-02-14 ${newSlot.startTime}:00`);
    const newEnd = new Date(`2002-02-14 ${newSlot.endTime}:00`);

    if (newStart < existingEnd && newEnd > existingStart) {
      return true;
    }
  }
  return false;
};
