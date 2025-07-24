# Sidebar Layout Component

The `SidebarLayout` component provides a reusable sidebar navigation wrapper that can be used across multiple pages in your application.

## Usage

Simply wrap your page content with the `SidebarLayout` component:

```tsx
import SidebarLayout from "@/components/layout/sidebar-layout";

export default function YourPage() {
  return (
    <SidebarLayout>
      {/* Your page content goes here */}
      <div>
        <h1>Your Page Title</h1>
        <p>Your page content...</p>
      </div>
    </SidebarLayout>
  );
}
```

## Features

- **Collapsible Sidebar**: Automatically collapses on smaller screens and can be toggled
- **Navigation Links**: Pre-configured links for Dashboard, Profile, Settings, and Logout
- **User Avatar**: Shows user profile picture at the bottom of the sidebar
- **Responsive Design**: Works on both desktop and mobile devices
- **Dark Mode Support**: Includes dark mode styling
- **Authentication Integration**: Redirects to login if user is not authenticated

## Navigation Links

The sidebar includes the following navigation links:
- **Dashboard** (`/dashboard`) - Main dashboard page
- **Profile** (`/profile`) - User profile management
- **Settings** (`/settings`) - Application settings
- **Logout** (`/auth/login`) - Logout functionality

## Customization

You can customize the sidebar by modifying the `SidebarLayout` component:
- Add new navigation links
- Change the logo and branding
- Modify the styling and colors
- Add additional functionality

## Example Pages

See the following pages for examples of how to use the sidebar layout:
- `app/dashboard/page.tsx`
- `app/profile/page.tsx`
- `app/settings/page.tsx` 