# 8 Best practices for SASS

## Structure

  - sass files should be structured in different folders
  - the names of the folders should show the purpose of the sass files saved in them
  - these are then imported by a global sass file

## Variables

  - Variable names should not be vague
  - Stick to a naming convention
  - Variable use must be justified

## Reduce Mixin Usage

  - Mixins should only be used if a variable is present otherwise they will produce many duplicates
  - No arguments -> use placeholders

## Embrace Placeholders

  - Placeholders do not produce duplicates and therefore should be used instead of mixins (without args)

## Use functions for calculations

  - Functions do not produce css output
  - They should be used for calculations in sass file

## Order your work

  - Site-wide variables, functions and so on should be placed in the correct files (like variables.scss, functions.scss)
  - Module-wide variables, functions and so on should be placed in the corresponding modules

## Limit nesting

  - Never go more than 3 levels deep
  - Ensure CSS output is clean and reusable
  - Use nesting when it makes sense (should not be the default)

## Keep things simple

  - Purpose of SASS is to write better and more reusable CSS
  - Before creating new mixins, functions ... check if it simplifies work and does not complicate the project
  - Use SASS features in the correct situation and in moderation
