import { SetMetadata } from '@nestjs/common';

export const Mydec = (...args: string[]) => SetMetadata('mydec', args);
