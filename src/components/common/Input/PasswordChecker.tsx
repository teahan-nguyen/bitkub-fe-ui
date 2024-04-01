import PasswordCheckerItem from "./PasswordCheckerItem";

interface PasswordCheckerProps {
  password: string;
}

export default function PasswordChecker({ password }: PasswordCheckerProps) {
  const isAtLeast8Chars = password.length >= 8;
  const isContainsBothLowerAndUpperLetter =
    /[a-z]/.test(password) && /[A-Z]/.test(password);
  const isContainsNumber = /\d/.test(password);
  const isContainsSpecialCharacter = /[#?!@$%^_+`~\\|/{}\]"':;<>[)(=&*-.]/.test(
    password,
  );

  return (
    <>
      <PasswordCheckerItem
        predicate={isAtLeast8Chars}
        text={"Contains at least 8 characters."}
      />
      <PasswordCheckerItem
        predicate={isContainsBothLowerAndUpperLetter}
        text={"Contains both lower (a-z) and upper case letters (A-Z)."}
      />
      <PasswordCheckerItem
        predicate={isContainsNumber}
        text={"Contains at least one number (0-9)."}
      />
      <PasswordCheckerItem
        predicate={isContainsSpecialCharacter}
        text={"Contains at least one special characters (e.g., !,@,# ...)."}
      />
    </>
  );
}
