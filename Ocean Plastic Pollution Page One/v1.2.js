            document.addEventListener("DOMContentLoaded", () => {
                const questions = document.querySelectorAll(".faq-question");
            
                questions.forEach(question => {
                    question.addEventListener("click", () => {
                        question.classList.toggle("active");
                        const answer = question.nextElementSibling;
                        const icon = question.querySelector(".icon");
            
                        if (getComputedStyle(answer).display === "block") {
                            answer.style.display = "none";
                            icon.textContent = "+";
                        } else {
                            answer.style.display = "block";
                            icon.textContent = "-";
                        }
                    });
                });
            });
            
            
            const ctx = document.getElementById('plastic-production-graph').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [1950, 1980, 2000, 2019, 2021, 2025],
                    datasets: [{
                        label: 'Plastic Production (Million Metric Tons)',
                        data: [2, 60, 187, 460, 390.7, 450],
                        borderColor: 'rgba(0,0,0,0.9)',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        tension: 0.3
                    }]
                },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    },
                    title: {
                        display: true,
                        text: 'Global Plastic Production Over Time'
                    }
                },
            scales: {
                y: {
                    min: 0,
                    max: 500,
                title: {
                    display: true,
                    text: 'Million Metric Tons'
                }
            },
                x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
            }
            }
            });
