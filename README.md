# i18n-experiment
Experiment with custom i18n content management in SvelteKit

## Setup
```bash
# install modules 
npm i

# launch application locally
npm run dev
```

## Overview
This experiment provides a minimally viable proof-of-concept for a custom Xyvid i18n solution, with user accessible content management. 

The primary benefit of this approach over other compatible i18n tools is that the localized content is not stored in a flat JSON file, and is maintained through a user interface. This allows content to be created and updated by non-technical team members. 

This approach also creates a more streamlined and tailored developer experience compared to some more complex options that attempt to serve many needs at once. 

The overarching purpose of this experiment is to help determine whether or not those value propositions outweigh the benefits of existing solutions.

## Usage
### Content management
The content management tools can be accessed by clicking the __i18n__ button in the top right after launching the application. 

The user interface is limited in it's current form, but you are able to create new locales and add/edit text content for a given locale (language).

### Shorthand _ function
```
<h2 class="font-bold">
  {_('welcome')}
</h2>

<button>{_('button_submit')}</button>
```

### Component wrapper
```
<LocalText slug="welcome" />
```

## Components 
### LocalText
An alternative to the shorthand _ function. This allows for more fine-grain logic when dealing with falling back for missing content, as well as more explicit formatting like setting the language direction attribute directly on a given text element. 

### LocalImage
*Not implemented.*

While avoiding language content in images is the best practice, it may happen. There could also be other use cases like localized logos or banner graphics.
This component would be a simple mechanism to handle such situations, by providing a simple wrapper to an image tag that uses a localized image URL if available.

```
<LocalImage image_slug="pwc_event_banner" />
```

## localize.ts
Core functionality for this feature. 

### _ (slug)
This is the primary endpoint for this library. 
Returns the localized text content for a given slug, or default content as a fallback.
The _ underscore function name serves as a shorthand when writing templates with localized content, yielding more readable code. This also follows existing conventions.

### Additional helper functions
#### getLocalText
Returns localized text for a given slug, or null if not found.

#### getDefaultText
Ignores locale and returns default (en-us) text for a given slug.

#### localNumber
*Not implemented.*

Formats and returns a given number according to localized customs. 

#### localDate
Formats a given UTC Date object into localized standards and timezone and returns as a string.

#### localTime
Formats the time of a given UTC Date object into localized standards and returns as a string.

## Data
This experiment uses Prisma ORM and a SQLite file based database, but the functionality would remain effectively the same for any relational DB setup. 

```
model Locale {
  id           Int         @id @default(autoincrement())
  code         String      @unique
  dir          String      @default("ltr")
  title        String
  native_title String
  LocalText    LocalText[]
}

model LocalText {
  id       Int    @id @default(autoincrement())
  locale   Locale @relation(fields: [localeId], references: [id])
  slug     String
  content  String
  localeId Int
}

model LocalImage {
  id      Int    @id @default(autoincrement())
  locale  Int
  slug    String
  content String
}
```
