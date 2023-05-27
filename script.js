const banner_help = `
██   ██ ███████ ██      ██████  
██   ██ ██      ██      ██   ██ 
███████ █████   ██      ██████  
██   ██ ██      ██      ██      
██   ██ ███████ ███████ ██                                                   
`;
const photo_banner = `
██████  ██   ██  ██████  ████████  ██████  
██   ██ ██   ██ ██    ██    ██    ██    ██ 
██████  ███████ ██    ██    ██    ██    ██ 
██      ██   ██ ██    ██    ██    ██    ██ 
██      ██   ██  ██████     ██     ██████                                                              
`;
const about_banner = `
█████  ██████   ██████  ██    ██ ████████ 
██   ██ ██   ██ ██    ██ ██    ██    ██    
███████ ██████  ██    ██ ██    ██    ██    
██   ██ ██   ██ ██    ██ ██    ██    ██    
██   ██ ██████   ██████   ██████     ██                                                                
`;
const skills_banner = `
███████ ██   ██ ██ ██      ██      ███████ 
██      ██  ██  ██ ██      ██      ██      
███████ █████   ██ ██      ██      ███████ 
     ██ ██  ██  ██ ██      ██           ██ 
███████ ██   ██ ██ ███████ ███████ ███████
`;
const projects_banner = `
██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
`;
const contact_banner = `
██████  ██████  ███    ██ ████████  █████   ██████ ████████ 
██      ██    ██ ████   ██    ██    ██   ██ ██         ██    
██      ██    ██ ██ ██  ██    ██    ███████ ██         ██    
██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██    
 ██████  ██████  ██   ████    ██    ██   ██  ██████    ██   
`;

const color = (clr, str) => {
  const colors = {
    blue: "#55f",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">photo</span> => my personal photo.
        <br>
        <span class="cmd">about</span> => my informations.
        <br>
        <span class="cmd">skills</span> => my skills.
        <br>
        <span class="cmd">projects</span> => my projects.
        <br>
        <span class="cmd">contact</span> => If you want to contact me.
        <br>
        <span class="cmd">developer</span> => This was created by who?.
        <br>
        <br>
        `);
      const banner = `${color("green", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    // photo
    photo: function() {
      const photo = $(`
        <h2><a href="https://postimg.cc/Xpx7mhcB" style="text-decoration:none; color:red;">I'm HERE!</a></h2>
        <br>
        `);
      const banner = `${color("green", photo_banner)}`;
      this.echo(banner);
      this.echo(photo);
    }
    ,
    // about
    about: function () {
      const about = $(`
        <h2>$ I'm Mohammed-Yassine BOUMEHDI.</h2>
        <br>
        <span style="color:lightgreen;">$</span> Age : 20 years
        <br>
        <span style="color:lightgreen;">$</span> Status : <span style="color:red">Alive.</span>
        <br>
        <span style="color:lightgreen;">$</span> Job: Software Engineering Student.
        <br>
        <span style="color:lightgreen;">$</span> Description: I am a first-year Software Engineering student at ENSIAS, passionate Competitive Programmer and DevOps enthusiast.
        <br>
        <span style="color:lightgreen;">$</span> Contact: <span style="color:red;">myboumehdi.2002@gmail.com</span>
        <br>
        <span style="color:lightgreen;">$</span> Twitter: <a href="github.com/MYassineBoum"><span style="color:red;">Twitter</span></a>
        <br>
        <span style="color:lightgreen;">$</span> Github: <a href="github.com/MYassineBoum"><span style="color:red;">Github</span></a>
        <br>
        <br>
        `);
      const banner = `${color("green", about_banner)}`;
      this.echo(banner);
      this.echo(about);
    },
    // skills
    skills: function () {
      const skills = $(`
      <h2>$ Some of my skills.</h2>
        <br>
        <span style="color:lightgreen;">$</span> Programming:
        <br>
        <span style="color:red">C/C++, Python, Java, Javascript, Data Structures, OOP.</span>
        <br>
        <span style="color:lightgreen;">$</span> WEB development:
        <br>
        <span style="color:red">HTML, XML, CSS, JavaScript, PHP, Laravel, Web Scraping, Bootstrap.</span>
        <br>
        <span style="color:lightgreen;">$</span> Database:
        <br>
        <span style="color:red">PL/SQL, MySQL, phpMyAdmin, MongoDB.</span>
        <br>
        <span style="color:lightgreen;">$</span> Tools:
        <br>
        <span style="color:red">Github, Git, VSC, Eclipse, Oracle, Ubuntu, Linux, Bootstrap Studio.</span>
        <br>
        <br>
      `);
      const banner = `${color("green", skills_banner)}`;
      this.echo(banner);
      this.echo(skills);
    },


    },

  {
    greetings: `
    ███    ███ ███████ ██████  ██    ██  █████  
    ████  ████ ██      ██   ██  ██  ██  ██   ██ 
    ██ ████ ██ █████   ██   ██   ████   ███████ 
    ██  ██  ██ ██      ██   ██    ██    ██   ██ 
    ██      ██ ███████ ██████     ██    ██   ██ 
                                                
                                                
            $ Hello! I am Mohammed-Yassine BOUMEHDI.
            $ Use 'help' command to get help. Enjoy!

    `,
    prompt() {
      return `┌──${color("green", "MedYa")}${color("green", "@cmd")}
└─\$ `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);
