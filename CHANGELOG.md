# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

## [1.0.0] - 2020-01-18

### Added
- REST API skeleton with Express.js and TypeScript.
- User authentication with JWT (login/register).
- MongoDB integration via Mongoose (`User` model).
- Input validation with `@hapi/joi` for register and login endpoints.
- Docker Compose configuration for local development (app + MongoDB).
- `.env.example` for environment variable configuration.
- README with setup instructions and route table.

### Changed
- Updated MongoDB connection options (`useNewUrlParser`, `useUnifiedTopology`).

---

## [0.1.0] - 2019-09-28

### Added
- Updated README.

## [0.0.1] - 2019-09-14

### Added
- Initial project scaffolding.