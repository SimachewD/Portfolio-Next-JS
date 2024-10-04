import { redirect } from 'next/navigation';


// Signup function that runs on the server-side
export async function signup( email:string, password:string ) {
  // Validate the form inputs
  if (!email || !password) {
    console.log(email,'Email is required.');
    console.log(password,'Password is required.');
    return;
  }

  const formData = { email, password }; // Construct the data to send

  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Directly use formData as JSON
    });
  
    if (!response.ok) {
      const errorData = await response.json();
        console.log(errorData.message,'Failed to create an account.'); // Improved error message
        return;
    }
  } catch (error) {
    console.log('An error occurred while creating your account.', error);
  }
}



// Signin function (login user)
export async function signin(email: string, password: string) {
  // Validate the form inputs
  if (!email || !password) {
    return {
      errors: {
        email: email ? undefined : 'Email is required.',
        password: password ? undefined : 'Password is required.',
      },
    };
  }

  const formData = { email, password }; // Construct the data to send

  try {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        errors: {
          name: errorData.message || 'Failed to sign in. Please try again.', // Improved error message
        },
      };
    }

    // Return success if no errors
    return {
      success: true,
    };
  } catch (error) {
    return {
      errors: {
        name: error instanceof Error ? error.message : 'An error occurred during sign-in.',
      },
    };
  }
}


// Logout function
export async function signout() {
  try {
    const response = await fetch('/api/auth/signout', {
      method: 'POST',
    });

    if (!response.ok) {
      // Handle sign-out error if necessary
      throw new Error('Failed to log out.');
    }

    // Return success if no errors
    return {
      success: true,
    };
  } catch (error) {
    console.error('Sign out error:', error);
    // Optionally handle sign out errors here
  }
}
