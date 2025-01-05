import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserValidator {
  @Expose()
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  fullName?: string;

  @Expose()
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString({ message: 'Phone number must be a string' })
  phoneNumber?: string;

  @Expose()
  @IsNotEmpty({ message: 'Gender is required' })
  @IsString({ message: 'Gender must be a string' })
  gender?: string;

  @Expose()
  @IsOptional()
  @IsString({ message: 'Invalid profile image path' })
  profileImage?: string;

  @Expose()
  @IsOptional()
  @IsString()
  firebaseToken?: string;
}
