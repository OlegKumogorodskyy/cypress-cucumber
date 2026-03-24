# Cypress Cucumber Testing Framework

A comprehensive test automation framework built with **Cypress** and **Cucumber** (BDD) for automated E2E testing and quality assurance.

## 🎯 Project Overview

This project demonstrates best practices in test automation using:
- **Cypress** - Fast, reliable end-to-end testing framework
- - **Cucumber** - Behavior-Driven Development (BDD) for readable test scenarios
  - - **Page Object Model** - Maintainable and scalable test structure
    - - **CI/CD Integration** - Automated test execution pipeline
     
      - ## 🚀 Features
     
      - - ✅ Comprehensive E2E test scenarios
        - - ✅ BDD-style test cases with Gherkin syntax
          - - ✅ Page Object Model architecture
            - - ✅ Cross-browser testing support
              - - ✅ Test reporting and analytics
                - - ✅ Continuous Integration setup
                 
                  - ## 📋 Prerequisites
                 
                  - - Node.js (v14 or higher)
                    - - npm or yarn package manager
                      - - Cypress installed locally
                       
                        - ## 🔧 Installation
                       
                        - ```bash
                          # Clone the repository
                          git clone https://github.com/OlegKumogorodskyy/cypress-cucumber.git

                          # Navigate to project directory
                          cd cypress-cucumber

                          # Install dependencies
                          npm install
                          ```

                          ## ▶️ Running Tests

                          ```bash
                          # Run all tests
                          npm test

                          # Run tests in headed mode
                          npm run test:headed

                          # Run specific feature file
                          npm run test:spec cypress/features/login.feature
                          ```

                          ## 📁 Project Structure

                          ```
                          cypress-cucumber/
                          ├── cypress/
                          │   ├── features/        # Gherkin feature files
                          │   ├── step_definitions/ # Step implementations
                          │   ├── pages/           # Page Object Models
                          │   ├── support/         # Configuration and helpers
                          │   └── plugins/         # Custom plugins
                          ├── package.json
                          ├── cypress.config.js
                          └── README.md
                          ```

                          ## 🧪 Test Examples

                          Tests cover various scenarios including:
                          - User authentication and authorization
                          - - Form submission and validation
                            - - Navigation and page transitions
                              - - Data operations (CRUD)
                                - - Error handling
                                 
                                  - ## 📊 Reports
                                 
                                  - Test results are generated in HTML format for easy analysis:
                                  - - Execution summary
                                    - - Pass/Fail statistics
                                      - - Screenshot and video recordings
                                        - - Detailed error logs
                                         
                                          - ## 👨‍💻 Author
                                         
                                          - **Oleg Kumogorodskyy** - QA Engineer | Test Automation Specialist
                                         
                                          - ## 📝 License
                                         
                                          - This project is open source and available for educational purposes.
                                         
                                          - ## 🤝 Contributing
                                         
                                          - Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.
                                         
                                          - ## 📚 Resources
                                         
                                          - - [Cypress Documentation](https://docs.cypress.io)
                                            - - [Cucumber for JavaScript](https://cucumber.io/docs/cucumber/)
                                              - - [Gherkin Syntax Guide](https://cucumber.io/docs/gherkin/)
