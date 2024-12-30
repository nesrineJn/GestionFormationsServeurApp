import { Expose } from 'class-transformer';
import { IsDefined, IsEmail, IsNotEmpty, IsString, MinLength, Matches, IsPhoneNumber, IsOptional } from 'class-validator';

export class RegisterValidator {
  @IsDefined({ message: 'Email is required' })
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  @Expose()
  email: string;

  @IsDefined({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Password must include uppercase, lowercase,and number',
  })
  @Expose()
  password: string;

  @IsDefined({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  @IsNotEmpty({ message: 'Full name is required' })
  @Expose()
  fullName: string;

  @Expose()
  @IsNotEmpty({ message: 'Name is required' })
  @IsOptional()
  phoneNumber: string;
}
