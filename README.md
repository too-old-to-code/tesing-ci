The main aim of this one is to show a ci pipeline for the nextjs app

difficulties
- make sure the single nginx `.conf` file is named default
- make sure the nginx config specifies to build a `standalone` app
- if putting test files inside the `/pages` folder, we need to add a `pageExtensions` property to the nextjs config, and use that extension for app files in that folder (excluding the test files).