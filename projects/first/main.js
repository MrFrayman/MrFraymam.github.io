// Tournament Scoring System Application
class Tournament {
    constructor(name, startDate, endDate) {
      this.name = name;
      this.startDate = startDate;
      this.endDate = endDate;
      this.teams = [];
      this.scores = {};
    }

    // Method to add a team to the tournament
    addTeam(teamName) {
      this.teams.push(teamName);
      this.scores[teamName] = 0; // Initialize score for the team
    }

    // Method to record scores for a match
    recordMatchScore(team1, team2, score1, score2) {
      // Update scores based on match results
      this.scores[team1] += score1;
      this.scores[team2] += score2;
    }

    // Method to calculate rankings
    calculateRankings() {
      let rankings = Object.keys(this.scores).sort((a, b) => {
        return this.scores[b] - this.scores[a];
      });
      return rankings;
    }

    // Method to get the winning team
    getWinningTeam() {
      let rankings = this.calculateRankings();
      return rankings[0]; // First team in the rankings has the highest score and is the winner
    }

    // Method to generate report
    generateReport() {
      let report = `<h2>Tournament Name: ${this.name}</h2>`;
      report += `<p>Start Date: ${this.startDate}, End Date: ${this.endDate}</p>`;
      report += "<h3>Rankings:</h3>";
      let rankings = this.calculateRankings();
      rankings.forEach((team, index) => {
        report += `<p>${index + 1}. ${team} - ${this.scores[team]} points</p>`;
      });
      // Add the winning team to the report
      let winningTeam = this.getWinningTeam();
      report += `<p>Winner: ${winningTeam}</p>`;
      return report;
    }
  }

  let tournamentName = prompt("Enter Tournament Name:");
  
  let stDate = prompt("Enter the Start date (e.g., 01, 02, ..., 31):");
  let stMonth = prompt("Enter the Start month (e.g., 01 for January, 02 for February, ..., 12 for December):");
  let stYear = prompt("Enter the Start year (e.g., 2024):");

  let enDate = prompt("Enter the End date (e.g., 01, 02, ..., 31):");
  let enMonth = prompt("Enter the End month (e.g., 01 for January, 02 for February, ..., 12 for December):");
  let enYear = prompt("Enter the End year (e.g., 2024):");

  let startDate = `${stYear}-${stMonth}-${stDate}`;
  let endDate = `${enYear}-${enMonth}-${enDate}`;
  
  let tournament = new Tournament(tournamentName, startDate, endDate);

  let numTeams = parseInt(prompt("Enter number of teams:"));
  for (let i = 0; i < numTeams; i++) {
      let teamName = prompt(`Enter name for Team ${i + 1}:`);
      tournament.addTeam(teamName);
  }

  // Record match scores
  for (let i = 0; i < numTeams - 1; i++) {
      for (let j = i + 1; j < numTeams; j++) {
          let score1 = parseInt(prompt(`Enter score for ${tournament.teams[i]} against ${tournament.teams[j]}:`));
          let score2 = parseInt(prompt(`Enter score for ${tournament.teams[j]} against ${tournament.teams[i]}:`));
          tournament.recordMatchScore(tournament.teams[i], tournament.teams[j], score1, score2);
      }
  }

  // Display the tournament report
  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML = tournament.generateReport();
