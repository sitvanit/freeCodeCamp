type Valid = {
  valid: true;
  error: null;
};

type Invalid = {
  valid: false;
  error: string;
};

type Validated = Valid | Invalid;

export const invalidCharError: Invalid = {
  valid: false,
  error: 'contains invalid characters'
};
export const validationSuccess: Valid = { valid: true, error: null };
export const usernameTooShort: Invalid = {
  valid: false,
  error: 'is too short'
};
export const usernameIsHttpStatusCode: Invalid = {
  valid: false,
  error: 'is a reserved error code'
};

const validCharsRE = /^[a-zA-Z0-9\-_+]*$/;
export const isHttpStatusCode = (str: string): boolean => {
  const output = parseInt(str, 10);
  return !isNaN(output) && output >= 100 && output <= 599;
};

export const isValidUsername = (str: string): Validated => {
  if (!validCharsRE.test(str)) return invalidCharError;
  if (str.length < 3) return usernameTooShort;
  if (isHttpStatusCode(str)) return usernameIsHttpStatusCode;
  return validationSuccess;
};

// example link: https://learn.microsoft.com/en-us/training/achievements/learn.wwl.get-started-c-sharp-part-1.trophy?username=moT01&sharingId=E2EF453C1F9208B8
export const isMicrosoftLearnLink = (value: string): boolean => {
  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const correctDomain = url.hostname === 'learn.microsoft.com';
  const correctPath = !!url.pathname.match(
    /^\/[^/]+\/training\/achievements\/learn\.wwl\.get-started-c-sharp-part-\d\.trophy$/
  );
  const hasSharingId = !!url.searchParams.get('sharingId');
  const hasUsername = !!url.searchParams.get('username');
  return correctDomain && correctPath && hasSharingId && hasUsername;
};
