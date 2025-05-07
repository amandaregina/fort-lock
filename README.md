# Fort Lock 🔒

Fort Lock is a secure password generation service that helps you create strong, customizable passwords. It provides a REST API that generates passwords based on your specific requirements, ensuring your digital security needs are met.

## What Does It Do?

Fort Lock generates secure passwords with the following customizable options:
- Password length
- Include/exclude numbers
- Include/exclude special symbols
- Include/exclude uppercase letters
- Option to exclude similar-looking characters (like 'l' and '1')

## API Usage

### Generate a Password

```http
POST /password
Content-Type: application/json

{
  "length": 12,
  "numbers": true,
  "symbols": true,
  "uppercase": true,
  "excludeSimilarCharacters": true
}
```

Example Response:
```json
{
  "password": "Kj#9mP$2vN@x"
}
```

## Features

- 🔐 Secure password generation
- ⚡ Fast and reliable API
- 🛡️ Input validation
- 🎯 Customizable password requirements
- 🚨 Comprehensive error handling

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd fort-lock
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start:dev
```

The server will start on port 3000 by default.

## Security Features

- Input validation using Zod schema
- Comprehensive error handling
- Type-safe API responses
- Secure password generation using industry-standard libraries

## Development

Built with:
- TypeScript
- Express.js
- NestJS
- Zod for validation
- Generate-password library for secure password generation

## License

This project is licensed under the MIT License - see the LICENSE file for details.