import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';
import { CreateUserProfileInput } from 'src/user-profile/dto/create-user-profile.input';

@InputType()
export class CreateUserInput {
  @Field()
  social_id: string;

  @Field()
  platform_type?: string;

  @Field()
  profile: CreateUserProfileInput;
}
