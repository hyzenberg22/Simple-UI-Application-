// This is the main entry point from where all the apps are running
// Importing all the components both custom and prebuilt components
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/Header/header.component';




// Running the custom components in the application
// we need to run the application only once use the tree structure in the app component
bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));