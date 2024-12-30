import { DuplicatedError, NotFoundError, UnauthorizedError } from '../errors';
import { authService, userService } from '../services';
import { bcryptService, jwtService, validators } from '../middlewares';

export const signIn = async (body: validators.SigninValidator) => {
  const email = body.email;
  const password = body.password;

  const user = await userService.getOne({ email });

  if (!user) {
    throw new NotFoundError('Utilisateur non trouvé');
  }

  const isMatch = await bcryptService.compare(password, user.password);

  if (!isMatch) {
    throw new UnauthorizedError('Mot de passe incorrect');
  }

  return await jwtService.generateToken({ id: user._id.toString() });
};

export const registerUser = async (body: validators.RegisterValidator) => {
  const { email, password, fullName, phoneNumber } = body;

  if (await authService.doesUserExist(email)) {
    throw new DuplicatedError("L'utilisateur existe déjà");
  }
 
  const user = await authService.createUser(email, password, fullName, phoneNumber);
return user
};


