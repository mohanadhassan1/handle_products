Clone Repository:
git clone https://github.com/mohanadhassan1/jatdev.git

Deploy in vercel:
https://mohanadhassan-jatdev.vercel.app/


Instructions:
1. Open vercel link "SpaceJAT Website" -> https://mohanadhassan-jatdev.vercel.app/
2. It will open the login page. If it's your first time,  proceed to the signup page.
3. Register using your name, email, password 
    a. Ensure that your name is at least 5 characters long.
    b. Use a valid email address format with "@" and ".com".
    c. Choose a password that is at least 8 characters long.
4. Add your first product, providing the name, price, and quantity "Don't write less than 0".
5. Edit the product by clicking on the "Edit" button.
6. Update the product details from the same place where it was added, then click the "Update" button.
7. Add your Second Product.
8. Delete the product by clicking on the "Delete" button.
9. Download your products by clicking on the "Download Products" button.
10. To logout, click on "Hello, [your name]" in the navbar.
11. The logout button will appear. Click on it to logout.
12. Thank you for visiting our website!


Installations:
npm i @headlessui/react @heroicons/react    # using in Navbar
npm i next-themes                           # using in Navbar
npm i react-hook-form                       # using in Signup and Login Forms
npm i class-variance-authority              # using in Button component
npm i tailwind-merge                        # using for utils to merge tailwindcss
npm i clsx                                  # using for utils for inputs
npm i yup                                   # using for validation
npm i react-hot-toast                       # using in messages and errors
npm i @reduxjs/toolkit                      # using for authentication 
npm i lucide-react                          # using for icons
npm i @react-pdf/renderer                   # using for download PDF


Project Structure:
├── app/                    # Next.js app
│   ├── product/            # Product CRUD page
│       ├── page.tsx        
│   ├── login/              # Login form page
│       ├── page.tsx        
│   ├── signup/             # Signup form page
│       ├── page.tsx        
│   ├── globals.css              
│   ├── layout.tsx          # Route page
│   ├── not-found.tsx       # 404 page
│   ├── page.tsx            # Home page (protected route)
├── components/             # Reusable components
│   ├── ui/                 
│       ├── Button.tsx        
│       ├── Input.tsx        
│       ├── InputErrorMessage.tsx        
│   ├── navbar.tsx          
│   ├── withAuth.tsx        # Authentication component
├── context/                # Context for managing user authentication and product state
│   ├── AuthContext.js      # 
├── data/                   # SIGNUP_FORM - LOGIN_FORM
│   ├── index.tsx           # 
├── data/                   # Signup - Login - Error interfaces
│   ├── index.tsx           # 
├── lib/                    # 
│   ├── utils.tsx           # 
├── store/                  # Redux
│   ├── authSlice.tsx       # 
│   ├── index.tsx           # 
├── validation/             # Signup - Login Schema
│   ├── index.tsx           # 
├── public/                 # Public assets (images, icons, etc.)
├── README.md               # Project README file
├── package.json            # Node.js dependencies and scripts


Download Products:
It will download using PDF format.