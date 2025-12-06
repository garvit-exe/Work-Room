# Security Policy

## Supported Versions

We take security seriously and actively maintain the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Recent Security Advisories

### CVE-2025-55182 & CVE-2025-66478 (React Server Components Vulnerability)

**Status: NOT AFFECTED** ✅

Work Room is **NOT affected** by the critical React Server Components vulnerabilities (CVE-2025-55182 and CVE-2025-66478).

**Why we're not affected:**
- This project uses **React 18.2.0**, which is not vulnerable
- The vulnerabilities only affect **React 19.x** (versions before 19.0.1, 19.1.2, and 19.2.1)
- This project does **NOT use Next.js** (it uses Vite instead)
- The vulnerabilities specifically affect Next.js versions 15.x and 16.x
- This project does **NOT use React Server Components**

**Current Dependencies:**
- React: 18.2.0
- React DOM: 18.2.0
- Build Tool: Vite (not Next.js)

### Security Best Practices

We follow these security best practices:
- Regularly update dependencies to their latest stable versions
- Monitor security advisories for all dependencies
- Use automated security scanning tools
- Implement proper input validation and sanitization
- Follow secure coding guidelines

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

1. **DO NOT** create a public GitHub issue
2. Email the maintainer directly with details about the vulnerability
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond to security reports within 48 hours and work on a fix as soon as possible.

## Security Updates

We regularly review and update our dependencies to address security vulnerabilities. To stay informed:
- Watch this repository for releases
- Check the CHANGELOG for security-related updates
- Review this SECURITY.md file periodically

## Dependency Security

To check for vulnerabilities in dependencies:

```bash
# In the client directory
cd client
npm audit

# In the server directory
cd server
npm audit
```

To fix vulnerabilities automatically:

```bash
npm audit fix
```

For major version updates that require manual intervention:

```bash
npm audit fix --force
```

**Note:** Always test thoroughly after updating dependencies.
