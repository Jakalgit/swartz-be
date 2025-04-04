import { IsEmail, Min } from "class-validator";

export class UserRequestDto {

  @Min(2, {message: "Name must be at least 2 characters"})
  name: string;

  @IsEmail({}, {message: "Invalid email format"})
  email: string;

  message: string;
}