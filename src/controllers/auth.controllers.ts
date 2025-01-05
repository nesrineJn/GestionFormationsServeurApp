import { DuplicatedError, NotFoundError, UnauthorizedError } from '../errors';
import { authService, userService } from '../services';
import { bcryptService, jwtService, validators } from '../middlewares';

export const signIn = async (body: validators.SigninValidator) => {
  const { email, password } = body;
  const user = await userService.getOne({ email });

  if (!user) {
    throw new NotFoundError('Utilisateur non trouvé');
  }

  const isMatch = await bcryptService.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthorizedError('Mot de passe incorrect');
  }

  const token = await jwtService.generateToken({
    id: user._id.toString()
  });

  // Retourner le token et le rôle dans la réponse
  return {
    access_token: token,
    role: user.role  // Assurez-vous que `role` est bien défini dans votre schéma utilisateur
  };
};


export const registerUser = async (body: validators.RegisterValidator) => {
  const { email, password, fullName, phoneNumber } = body;

  if (await authService.doesUserExist(email)) {
    throw new DuplicatedError("L'utilisateur existe déjà");
  }
 
  const user = await authService.createUser(email, password, fullName, phoneNumber);
return user
};


