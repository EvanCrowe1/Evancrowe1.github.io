// Example fixtures data (this could come from an API or a database)
        const fixtures = [
            { date: '2024-11-15', time: '19:30', fixture: 'Ballyhaise vs. Cavan Gaels', venue: 'Annalee Park, Ballyhaise' },
            { date: '2024-11-22', time: '15:00', fixture: 'Ballyhaise vs. Kingscourt', venue: 'Kingscourt Grounds' },
            { date: '2024-11-29', time: '18:00', fixture: 'Ballyhaise vs. Bailieborough', venue: 'Bailieborough Park' },
            { date: '2024-12-06', time: '14:30', fixture: 'Ballyhaise vs. Shercock', venue: 'Shercock GAA Grounds' },
            { date: '2024-12-13', time: '16:00', fixture: 'Ballyhaise vs. Lavey', venue: 'Lavey Park' },
            { date: '2024-12-20', time: '17:00', fixture: 'Ballyhaise vs. Cuchulainns', venue: 'Cuchulainns Grounds' },
            { date: '2024-12-27', time: '18:00', fixture: 'Ballyhaise vs. Crosskeys', venue: 'Crosskeys Park' },
            { date: '2025-01-03', time: '19:30', fixture: 'Ballyhaise vs. Drumalee', venue: 'Drumalee GAA Grounds' },
            { date: '2025-01-10', time: '15:00', fixture: 'Ballyhaise vs. Ramor Utd', venue: 'Ramor Utd Grounds' },
            { date: '2025-01-17', time: '14:30', fixture: 'Ballyhaise vs. Mullahoran', venue: 'Mullahoran Grounds' }
        ];

        const fixturesPerPage = 5; // Number of fixtures to display per page
        let currentPage = 1; // Track current page

        // Function to populate the fixtures table
        function populateFixturesTable() {
            const tableBody = document.querySelector('#fixtures-table tbody');
            const start = (currentPage - 1) * fixturesPerPage;
            const end = start + fixturesPerPage;

            // Clear the table body before inserting new rows
            tableBody.innerHTML = '';

            // Loop through the fixtures for the current page
            const currentFixtures = fixtures.slice(start, end);
            currentFixtures.forEach(fixture => {
                const row = document.createElement('tr');
                
                // Create and append date cell
                const dateCell = document.createElement('td');
                dateCell.textContent = fixture.date;
                row.appendChild(dateCell);

                // Create and append time cell
                const timeCell = document.createElement('td');
                timeCell.textContent = fixture.time;
                row.appendChild(timeCell);

                // Create and append fixture cell
                const fixtureCell = document.createElement('td');
                fixtureCell.textContent = fixture.fixture;
                row.appendChild(fixtureCell);

                // Create and append venue cell
                const venueCell = document.createElement('td');
                venueCell.textContent = fixture.venue;
                row.appendChild(venueCell);

                // Append row to table body
                tableBody.appendChild(row);
            });

            // Update pagination controls
            updatePaginationControls();
        }

        // Function to update pagination controls
        function updatePaginationControls() {
            const totalPages = Math.ceil(fixtures.length / fixturesPerPage);
            const paginationControls = document.getElementById('pagination-controls');
            paginationControls.innerHTML = ''; // Clear previous buttons

            // Create previous button
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.disabled = currentPage === 1;
            prevButton.onclick = () => {
                currentPage--;
                populateFixturesTable();
            };
            paginationControls.appendChild(prevButton);

            // Create page number buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.classList.toggle('active', i === currentPage);
                pageButton.onclick = () => {
                    currentPage = i;
                    populateFixturesTable();
                };
                paginationControls.appendChild(pageButton);
            }

            // Create next button
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.disabled = currentPage === totalPages;
            nextButton.onclick = () => {
                currentPage++;
                populateFixturesTable();
            };
            paginationControls.appendChild(nextButton);
        }

        // Initialize the table and pagination on page load
        window.onload = populateFixturesTable;