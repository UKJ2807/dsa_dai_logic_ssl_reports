function start_match()
    {       
            let team1name=document.getElementById("team_1_name").value;
            console.log(team1name);
                let team2name=document.getElementById("team_2_name").value;
                console.log(team2name);
                let twinner=document.getElementById("toss_winner").value;
                console.log(twinner);
            let tdecision=document.getElementById("toss_decision").value;
            console.log(tdecision);
            sessionStorage.setItem('team1name', team1name);
    sessionStorage.setItem('team2name', team2name);
    sessionStorage.setItem('twinner', twinner);
    sessionStorage.setItem('tdecision', tdecision);
        window.location.href="live.html";
    }
    function matchover(){
    if(match_over)
        {
            let match_summary=document.getElementById("go_to_matchsummary");
            match_summary.classList.remove('hidden');
            match_summary.style.display = 'block';
        }
    }
    class inn_batters{
        constructor(striker,str_runs,str_balls,str_4s,str_6s,str_strikerate){
            this.striker=striker;
            this.str_runs=str_runs;
            this.str_balls=str_balls;
            this.str_4s=str_4s;
            this.str_6s=str_6s;
            this.str_strikerate=str_strikerate;
        }
    }
    class inn_bowlers{
        constructor(bowler,overs,runs_conceded,wickets,economy_rate,maidens)
        {
            this.bowler=bowler;
            this.overs=overs;
            this.runs_conceded=runs_conceded;
            this.wickets=wickets;
            this.economy_rate=economy_rate;
            this.maidens=maidens;
        }
    }
    function back_to_live(){
        window.location.href="live.html";
    }
    function no_ball(){
        const team1_name = sessionStorage.getItem('team1name');
            const team2_name = sessionStorage.getItem('team2name');
        let selectedRun = document.querySelector('input[name="runs"]:checked');
        if (!selectedRun) {
            alert("Please select runs for this ball!");
            return;
        }
    let run_on_this_ball = Number(selectedRun.value);
    console.log(`Before: ${currruns_conceded}`);
            currruns_conceded = Number(currruns_conceded) + run_on_this_ball+1;
            console.log(`After: ${currruns_conceded}`);
            if (run_on_this_ball === 4) str_4s++;
                    if (run_on_this_ball === 6) str_6s++;
                    str_runs=Number(str_runs)+run_on_this_ball;
                    team1_runs=Number(team1_runs)+run_on_this_ball+1;
                    if(balls!=0){
                    curreconomy_rate=(Number(currruns_conceded)/currbowler_balls)*6.0;
                    str_strikerate = ((Number(str_runs) / str_balls) * 100).toFixed(2);
                    }
                    else{
                        curreconomy_rate= 0; 
                        str_strikerate =0;
                    }
                    console.log(curreconomy_rate.toFixed(2));
                    if(run_on_this_ball%2!=0)
                        {
                            swapStrikers();
                        }
                        updateScoreboard();
                        persistState();
        
                        firstinn_batters[no_of_wickets].striker=striker;
                    firstinn_batters[no_of_wickets].str_runs=str_runs;
                    firstinn_batters[no_of_wickets].str_balls=str_balls;
                    firstinn_batters[no_of_wickets].str_4s=str_4s;
                    firstinn_batters[no_of_wickets].str_6s=str_6s;
                    firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
                        console.log(firstinn_batters[no_of_wickets]);
                    firstinn_batters[no_of_wickets+1].striker=nonstriker;
                    firstinn_batters[no_of_wickets+1].str_runs=nstr_runs;
                    firstinn_batters[no_of_wickets+1].str_balls=nstr_balls;
                    firstinn_batters[no_of_wickets+1].str_4s=nstr_4s;
                    firstinn_batters[no_of_wickets+1].str_6s=nstr_6s;
                    firstinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
                    console.log(firstinn_batters[no_of_wickets+1]);
                    firstinn_bowlers[bowler_number].bowler=bowler;
                    firstinn_bowlers[bowler_number].overs=currbowler_overs;
                    firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
                    firstinn_bowlers[bowler_number].wickets=currwickets;
                    firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
                    firstinn_bowlers[bowler_number].maidens=currmaidens;
                    console.log(team1_runs);
                    if(batting_team===team1_name){
                        document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
                        }
                        else if(batting_team===team2_name){
                            document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
                        }
                        comment.innerHTML=`<p>It's a no ball. Runs conceded on this ball are ${run_on_this_ball}</p>`;
    }
    function wide(){
        const team1_name = sessionStorage.getItem('team1name');
            const team2_name = sessionStorage.getItem('team2name');
        currruns_conceded = Number(currruns_conceded) + 1;
            console.log(`After: ${currruns_conceded}`);
                    team1_runs=Number(team1_runs)+1;
                    if(balls!=0){
                    curreconomy_rate=(Number(currruns_conceded)/currbowler_balls)*6.0;
                    }
                    else{
                        curreconomy_rate=0;
                    }
                    console.log(curreconomy_rate.toFixed(2));
                        updateScoreboard();
                        persistState();
        
                        firstinn_batters[no_of_wickets].striker=striker;
                    firstinn_batters[no_of_wickets].str_runs=str_runs;
                    firstinn_batters[no_of_wickets].str_balls=str_balls;
                    firstinn_batters[no_of_wickets].str_4s=str_4s;
                    firstinn_batters[no_of_wickets].str_6s=str_6s;
                    firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
                        console.log(firstinn_batters[no_of_wickets]);
                    firstinn_batters[no_of_wickets+1].striker=nonstriker;
                    firstinn_batters[no_of_wickets+1].str_runs=nstr_runs;
                    firstinn_batters[no_of_wickets+1].str_balls=nstr_balls;
                    firstinn_batters[no_of_wickets+1].str_4s=nstr_4s;
                    firstinn_batters[no_of_wickets+1].str_6s=nstr_6s;
                    firstinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
                    console.log(firstinn_batters[no_of_wickets+1]);
                    firstinn_bowlers[bowler_number].bowler=bowler;
                    firstinn_bowlers[bowler_number].overs=currbowler_overs;
                    firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
                    firstinn_bowlers[bowler_number].wickets=currwickets;
                    firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
                    firstinn_bowlers[bowler_number].maidens=currmaidens;
                    console.log(team1_runs);
                    if(batting_team===team1_name){
                        document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
                        }
                        else if(batting_team===team2_name){
                            document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
                        }
                        comment.innerHTML=`<p>It is a wide.</p>`
    }
    let balls=0;
                let team1_runs=0;
                let overs=0;
                let currwickets=0;
                let currmaidens=0;
                let str_balls=0;
                let nstr_balls=0;
                let str_runs=0;
                let nstr_runs=0;
                let str_4s=0;
                let str_6s=0;
                let comment=document.getElementById("commentary");
                let nstr_4s=0;
                let nstr_6s=0;
                let str_strikerate=0;
                let nstr_strikerate=0;
                let curreconomy_rate=0;
                let currbowler_overs=0;
                let currruns_conceded=0;
                let no_of_wickets=0;
                let currbowler_balls=0;
                let firstinn_batters=[];
                let firstinn_bowlers=[];
                let secondinn_batters=[];
                let secondinn_bowlers=[];
                let firstinnings=true;
                let team2_runs=0;
                let team1_wickets=0;
                let team2_wickets=0;
                let bowler_number=0;
                let striker,nonstriker,bowler;
                let match_over=false;
                const el1 = document.getElementById('rrr');
                const el2 = document.getElementById('crr');
                const el3=document.getElementById("rrr1");
                const el4=document.getElementById("crr1");
                let overs1=0;
                function persistState(){
                    sessionStorage.setItem('bowler_number',bowler_number);
                    sessionStorage.setItem('no_of_wickets',JSON.stringify(no_of_wickets));
                    sessionStorage.setItem('currbowler_balls',JSON.stringify(currbowler_balls));
                    sessionStorage.setItem('team1_runs',JSON.stringify(team1_runs));
                    sessionStorage.setItem('team2_runs',JSON.stringify(team2_runs));
                    sessionStorage.setItem('balls',JSON.stringify(balls));
                    sessionStorage.setItem('overs',JSON.stringify(overs));
                    sessionStorage.setItem('team1wickets',JSON.stringify(team1_wickets));
                    sessionStorage.setItem('team2wickets',JSON.stringify(team2_wickets));
                    sessionStorage.setItem('firstinnings',JSON.stringify(firstinnings));
                    sessionStorage.setItem('firstinn_batters', JSON.stringify(firstinn_batters));
                    sessionStorage.setItem('firstinn_bowlers', JSON.stringify(firstinn_bowlers));
                    sessionStorage.setItem('secondinn_batters', JSON.stringify(secondinn_batters));
                    sessionStorage.setItem('secondinn_bowlers', JSON.stringify(secondinn_bowlers));
                    sessionStorage.setItem('striker',JSON.stringify(striker));
                    sessionStorage.setItem('str_runs',JSON.stringify(str_runs));
                    sessionStorage.setItem('str_balls',JSON.stringify(str_balls));
                    sessionStorage.setItem('str_4s',JSON.stringify(str_4s));
                    sessionStorage.setItem('str_6s',JSON.stringify(str_6s));
                    sessionStorage.setItem('str_strikerate',JSON.stringify(str_strikerate));
                    sessionStorage.setItem('nonstriker',JSON.stringify(nonstriker));
                    sessionStorage.setItem('nstr_runs',JSON.stringify(nstr_runs));
                    sessionStorage.setItem('nstr_balls',JSON.stringify(nstr_balls));
                    sessionStorage.setItem('nstr_4s',JSON.stringify(nstr_4s));
                    sessionStorage.setItem('nstr_6s',JSON.stringify(nstr_6s));
                    sessionStorage.setItem('nstr_strikerate',JSON.stringify(nstr_strikerate));
                    sessionStorage.setItem('bowler',JSON.stringify(bowler));
                    sessionStorage.setItem('currbowler_overs',JSON.stringify(currbowler_overs));
                    sessionStorage.setItem('currruns_conceded',JSON.stringify(currruns_conceded));
                    sessionStorage.setItem('currmaidens',JSON.stringify(currmaidens));
                    sessionStorage.setItem('currwickets',JSON.stringify(currwickets));
                    sessionStorage.setItem('curreconomy_rate',JSON.stringify(curreconomy_rate));}
                function swapStrikers() {
                    [striker, nonstriker] = [nonstriker, striker];
                    [str_balls, nstr_balls] = [nstr_balls, str_balls];
                    [str_runs, nstr_runs] = [nstr_runs, str_runs];
                    [str_4s, nstr_4s] = [nstr_4s, str_4s];
                    [str_6s, nstr_6s] = [nstr_6s, str_6s];
                    [str_strikerate, nstr_strikerate] = [nstr_strikerate, str_strikerate];
                }
                let batting_team;
                function updateScoreboard() {
                    document.getElementById("str_name").textContent = striker;
                    document.getElementById("str_runs").textContent = str_runs;
                    document.getElementById("str_4s").textContent = str_4s;
                    document.getElementById("str_6s").textContent = str_6s;
                    document.getElementById("str_strikerate").textContent = str_strikerate;
                    document.getElementById("str_balls").textContent = str_balls;
                
                    document.getElementById("nstr_name").textContent = nonstriker;
                    document.getElementById("nstr_runs").textContent = nstr_runs;
                    document.getElementById("nstr_4s").textContent = nstr_4s;
                    document.getElementById("nstr_6s").textContent = nstr_6s;
                    document.getElementById("nstr_strikerate").textContent = nstr_strikerate;
                    document.getElementById("nstr_balls").textContent = nstr_balls;
                
                    document.getElementById("current_bowler").textContent = bowler;
                    document.getElementById("overs").textContent = currbowler_overs;
                    document.getElementById("maidens").textContent = currmaidens;
                    document.getElementById("runs_conceded").textContent = currruns_conceded;
                    document.getElementById("wickets").textContent = currwickets;
                    document.getElementById("economy_rate").textContent = curreconomy_rate.toFixed(2);
                }
            window.onload=function (){
            if(window.location.pathname.includes("live.html")){
                function ballsToOvers(ballCount) {
                    return `${Math.floor(ballCount / 6)}.${ballCount % 6}`;
                }
                if(sessionStorage.getItem('striker')){
                    bowler_number=JSON.parse(sessionStorage.getItem('bowler_number'));
                    no_of_wickets=JSON.parse(sessionStorage.getItem('no_of_wickets'));
                    team1_runs=JSON.parse(sessionStorage.getItem('team1_runs'));
                    team2_runs=JSON.parse(sessionStorage.getItem('team2_runs'));
                    overs=JSON.parse(sessionStorage.getItem('overs'));
                    balls=JSON.parse(sessionStorage.getItem('balls'));
                    firstinnings=JSON.parse(sessionStorage.getItem('firstinnings'));
                    team1_wickets=JSON.parse(sessionStorage.getItem('team1wickets'));
                    team2_wickets=JSON.parse(sessionStorage.getItem('team2wickets'));
                    striker=JSON.parse(sessionStorage.getItem('striker'));
                    str_runs=JSON.parse(sessionStorage.getItem('str_runs'));
                    nstr_runs=JSON.parse(sessionStorage.getItem('nstr_runs'));
                    str_balls=JSON.parse(sessionStorage.getItem('str_balls'));
                    str_4s=JSON.parse(sessionStorage.getItem('str_4s'));
                    str_6s=JSON.parse(sessionStorage.getItem('str_6s'));
                    str_strikerate=JSON.parse(sessionStorage.getItem('str_strikerate'));
                    nonstriker=JSON.parse(sessionStorage.getItem('nonstriker'));
                    nstr_balls=JSON.parse(sessionStorage.getItem('nstr_balls'));
                    nstr_4s=JSON.parse(sessionStorage.getItem('nstr_4s'));
                    nstr_6s=JSON.parse(sessionStorage.getItem('nstr_6s'));
                    nstr_strikerate=JSON.parse(sessionStorage.getItem('nstr_strikerate'));
                    bowler=JSON.parse(sessionStorage.getItem('bowler'));
                    currbowler_overs=JSON.parse(sessionStorage.getItem('currbowler_overs'));
                    currruns_conceded=JSON.parse(sessionStorage.getItem('currruns_conceded'));
                    currmaidens=JSON.parse(sessionStorage.getItem('currmaidens'));
                    curreconomy_rate=JSON.parse(sessionStorage.getItem('curreconomy_rate'));
                    currwickets=JSON.parse(sessionStorage.getItem('currwickets'));
                    currbowler_balls=JSON.parse(sessionStorage.getItem('currbowler_balls'));
                    firstinn_batters=JSON.parse(sessionStorage.getItem('firstinn_batters'));
                    firstinn_bowlers=JSON.parse(sessionStorage.getItem('firstinn_bowlers'));
                    secondinn_batters=JSON.parse(sessionStorage.getItem('secondinn_batters'));
                    secondinn_bowlers=JSON.parse(sessionStorage.getItem('secondinn_bowlers'));
                }else{
                striker=prompt("First Striker:");
                firstinn_batters[no_of_wickets]=new inn_batters(striker,str_runs,str_balls,str_4s,str_6s,str_strikerate);
            nonstriker=prompt("First Non striker:");
            firstinn_batters[no_of_wickets+1]=new inn_batters(nonstriker,nstr_runs,nstr_balls,nstr_4s,nstr_6s,nstr_strikerate);
            bowler=prompt("First Bowler:");
            firstinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens)
        console.log(firstinn_batters[no_of_wickets]);
        console.log(firstinn_batters[no_of_wickets+1]);
                }
        const team1_name = sessionStorage.getItem('team1name');
            const team2_name = sessionStorage.getItem('team2name');
            const t_decision = sessionStorage.getItem('tdecision');
            const t_winner = sessionStorage.getItem('twinner');
            console.log("Team 1:", team1_name);
        console.log("Team 2:", team2_name);
        console.log("Toss Winner:", t_winner);
        console.log("Toss Decision:", t_decision);
        if(t_winner=='team1' && t_decision=='Bat'){
            batting_team=team1_name;
            bowling_team=team2_name;
        }
        else if(t_winner=='team2' && t_decision=='Bat'){
            batting_team=team2_name;
            bowling_team=team1_name;
        }
        else if(t_winner=='team1' && t_decision=='Bowl'){
            batting_team=team2_name;
            bowling_team=team1_name;
        }  
        else if(t_winner=='team2' && t_decision=='Bowl'){
            batting_team=team1_name;
            bowling_team=team2_name;
        }
        console.log(batting_team);
        if(batting_team===team1_name){
            document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
            }
            else if(batting_team===team2_name){
                document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
            }
            updateScoreboard();

        document.getElementById("submit_ball").addEventListener("click", ()=>{
            if(firstinnings){
                    if(balls<12){
                        let selectedRun = document.querySelector('input[name="runs"]:checked');
                    if (!selectedRun) {
                        alert("Please select runs for this ball!");
                        return;
                    }
        let run_on_this_ball = Number(selectedRun.value);
            console.log(`Before: ${currruns_conceded}`);
            currruns_conceded = Number(currruns_conceded) + run_on_this_ball;
            console.log(`After: ${currruns_conceded}`);
                    balls+=1;
                    currbowler_balls+=1;
                    currbowler_overs = ballsToOvers(currbowler_balls);
                    overs=ballsToOvers(balls);
                    if (run_on_this_ball === 4) str_4s++;
                    if (run_on_this_ball === 6) str_6s++;
                    str_runs=Number(str_runs)+run_on_this_ball;
        
                    str_balls+=1;
                    str_strikerate = ((Number(str_runs) / str_balls) * 100).toFixed(2);
                    team1_runs=Number(team1_runs)+run_on_this_ball;
                    curreconomy_rate=(Number(currruns_conceded)/currbowler_balls)*6.0;
                    console.log(curreconomy_rate.toFixed(2));
                    comment.innerHTML=`<p>${striker} took ${run_on_this_ball} runs.</p>`;
                if(balls==6)
                    {
                        if(Number(currruns_conceded)==0){
                            currmaidens=1;
                        }
                        firstinn_bowlers[bowler_number].bowler=bowler;
                        firstinn_bowlers[bowler_number].overs=currbowler_overs;
                        firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
                        firstinn_bowlers[bowler_number].wickets=currwickets;
                        firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
                        firstinn_bowlers[bowler_number].maidens=currmaidens;
                        let new_bowler=prompt("New Bowler: ");
                        if(bowler!=new_bowler)
                        {
                            currwickets=0;
                            currmaidens=0;
                            currbowler_overs=0;
                            currbowler_balls=0;
                            curreconomy_rate=0;
                            currruns_conceded=0;
                            bowler=new_bowler;
                        }
                        bowler_number+=1;
                        firstinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens);
                        swapStrikers();
                    }
                if(run_on_this_ball%2!=0)
                    {
                        swapStrikers();
                    }
                updateScoreboard();
                persistState();

                firstinn_batters[no_of_wickets].striker=striker;
            firstinn_batters[no_of_wickets].str_runs=str_runs;
            firstinn_batters[no_of_wickets].str_balls=str_balls;
            firstinn_batters[no_of_wickets].str_4s=str_4s;
            firstinn_batters[no_of_wickets].str_6s=str_6s;
            firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
                console.log(firstinn_batters[no_of_wickets]);
            firstinn_batters[no_of_wickets+1].striker=nonstriker;
            firstinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            firstinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            firstinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            firstinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            firstinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
            console.log(firstinn_batters[no_of_wickets+1]);
            firstinn_bowlers[bowler_number].bowler=bowler;
            firstinn_bowlers[bowler_number].overs=currbowler_overs;
            firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            firstinn_bowlers[bowler_number].wickets=currwickets;
            firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            firstinn_bowlers[bowler_number].maidens=currmaidens;
            console.log(team1_runs);
                }
                else{
                    firstinn_batters[no_of_wickets].striker=striker;
            firstinn_batters[no_of_wickets].str_runs=str_runs;
            firstinn_batters[no_of_wickets].str_balls=str_balls;
            firstinn_batters[no_of_wickets].str_4s=str_4s;
            firstinn_batters[no_of_wickets].str_6s=str_6s;
            firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            firstinn_batters[no_of_wickets+1].striker=nonstriker;
            firstinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            firstinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            firstinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            firstinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            firstinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
            firstinn_bowlers[bowler_number].bowler=bowler;
            firstinn_bowlers[bowler_number].overs=currbowler_overs;
            firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            firstinn_bowlers[bowler_number].wickets=currwickets;
            firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            firstinn_bowlers[bowler_number].maidens=currmaidens;
                    updateScoreboard();
                    persistState();
                }
                if(batting_team===team1_name){
                    document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
                    }
                    else if(batting_team===team2_name){
                        document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
                    }
                }
                if(balls>=12 && firstinnings)
                    {
                        no_of_wickets=0;
                        overs1=overs;
                        firstinnings=false;
                        striker = prompt("First Striker:");
                        str_4s = 0;
                        str_6s = 0;
                        str_balls = 0;
                        str_runs = 0;
                        str_strikerate = 0;
                    console.log(document.getElementById("str_name".textContent));
                        secondinn_batters[no_of_wickets]=new inn_batters(striker,str_runs,str_balls,str_4s,str_6s,str_strikerate);
                        nonstriker = prompt("First Non-striker:");
                        nstr_4s = 0;
                        nstr_6s = 0;
                        nstr_balls = 0;
                        nstr_runs = 0;
                        nstr_strikerate = 0;
                        secondinn_batters[no_of_wickets+1]=new inn_batters(nonstriker,nstr_runs,nstr_balls,nstr_4s,nstr_6s,nstr_strikerate);
                        bowler=prompt("First Bowler: ");
                        currwickets=0;
                        overs=0;
                                    currmaidens=0;
                                    currbowler_overs=0;
                                    curreconomy_rate=0;
                                    currruns_conceded=0;
                                    currbowler_balls=0;
                                    balls=0;
                                    bowler_number=0;
                                    secondinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens);
                                    if(batting_team===team1_name){
                                        document.getElementById("score_display").textContent=`${team2_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team1_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        else if(batting_team===team2_name){
                                            document.getElementById("score_display").textContent=`${team1_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team2_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                    console.log(team1_runs);
                                    el1.classList.remove('hidden');
                                    el1.style.display = 'block';
                                    el1.textContent=6*(team1_runs-team2_runs)/(12-balls).toFixed(2);
                                    el2.classList.remove('hidden');
                                    el2.style.display = 'block';
                                    el2.textContent+=0;
                                    el3.classList.remove('hidden');
                                    el3.style.display = 'block';
                                    el4.classList.remove('hidden');
                                    el4.style.display = 'block';
                                    updateScoreboard();
                                    comment.innerHTML=`<p>Second innings have started.</p>`;
                    }
                    else if(!firstinnings && !match_over){
                                    if(balls<12){
                                        let selectedRun = document.querySelector('input[name="runs"]:checked');
                                    if (!selectedRun) {
                                        alert("Please select runs for this ball!");
                                        return;
                                    }
                        let run_on_this_ball = Number(selectedRun.value);
                            console.log(`Before: ${currruns_conceded}`);
                            currruns_conceded = Number(currruns_conceded) + run_on_this_ball;
                            console.log(`After: ${currruns_conceded}`);
                                    balls+=1;
                                    currbowler_balls+=1;
                                    currbowler_overs = ballsToOvers(currbowler_balls);
                                    overs=ballsToOvers(balls);
                                    if (run_on_this_ball === 4) str_4s++;
                                    if (run_on_this_ball === 6) str_6s++;
                                    str_runs=Number(str_runs)+run_on_this_ball;
                        
                                    str_balls+=1;
                                    str_strikerate = ((Number(str_runs) / str_balls) * 100).toFixed(2);
                                    team2_runs=Number(team2_runs)+run_on_this_ball;
                                    curreconomy_rate=(Number(currruns_conceded)/currbowler_balls)*6.0;
                                    console.log(curreconomy_rate.toFixed(2));
                                    secondinn_batters[no_of_wickets].str_runs=str_runs;
            secondinn_batters[no_of_wickets].str_balls=str_balls;
            secondinn_batters[no_of_wickets].str_4s=str_4s;
            secondinn_batters[no_of_wickets].str_6s=str_6s;
            secondinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            secondinn_batters[no_of_wickets+1].striker=nonstriker;
            secondinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            secondinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            secondinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            secondinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            secondinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
            comment.innerHTML=`<p>${striker} took ${run_on_this_ball} runs.</p>`;
                                if(balls==6)
                                    {
                                        if(Number(currruns_conceded)==0){
                                            currmaidens=1;
                                        }
                                        secondinn_bowlers[bowler_number].bowler=bowler;
            secondinn_bowlers[bowler_number].overs=currbowler_overs;
            secondinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            secondinn_bowlers[bowler_number].wickets=currwickets;
            secondinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            secondinn_bowlers[bowler_number].maidens=currmaidens;
                                        let new_bowler=prompt("New Bowler: ");
                                        if(bowler!=new_bowler)
                                        {
                                            currwickets=0;
                                            currmaidens=0;
                                            currbowler_overs=0;
                                            currbowler_balls=0;
                                            curreconomy_rate=0;
                                            currruns_conceded=0;
                                            bowler=new_bowler;
                                            bowler_number+=1;
                                        }
                                        secondinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens);
                                        swapStrikers();
                                    }
                                if(run_on_this_ball%2!=0 && balls!=6)
                                    {
                                        swapStrikers();
                                    }
                                    if(team1_runs>=team2_runs)
                                        {
                                        el1.textContent=6*(team1_runs-team2_runs)/(12-balls).toFixed(2);
                                    }
                                    else{
                                        el1.textContent=0;
                                    }
                                    el2.textContent=6*(team2_runs)/balls.toFixed(2);
                                    updateScoreboard();

                                    console.log(team1_runs);
                                    if(batting_team===team1_name){
                                        document.getElementById("score_display").textContent=`${team2_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team1_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        else if(batting_team===team2_name){
                                            document.getElementById("score_display").textContent=`${team1_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team2_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        if(team2_runs>team1_runs){
                                            match_over=true;
                                            matchover();
                                        }
                                }
                                else{
                                    
                                    secondinn_batters[no_of_wickets].str_balls=str_balls;
            secondinn_batters[no_of_wickets].str_4s=str_4s;
            secondinn_batters[no_of_wickets].str_6s=str_6s;
            secondinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            secondinn_batters[no_of_wickets+1].striker=nonstriker;
            secondinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            secondinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            secondinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            secondinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            secondinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
            secondinn_bowlers[bowler_number].bowler=bowler;
            secondinn_bowlers[bowler_number].overs=currbowler_overs;
            secondinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            secondinn_bowlers[bowler_number].wickets=currwickets;
            secondinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            secondinn_bowlers[bowler_number].maidens=currmaidens;
                                    updateScoreboard();
                                    el1.textContent=0;
                                    el2.textContent=0;
                                    match_over=true;
                                    matchover();
                                }
                            }
                        });
                            document.getElementById("wicket").addEventListener("click", () => {
                                if(balls<12 && firstinnings)
                                {
                                if(no_of_wickets < 9){
                                    no_of_wickets += 1;
                                    comment.innerHTML=`<p>${striker} out after taking ${str_runs} runs in ${str_balls} balls.</p>`;
                                    striker = prompt("New Striker:");
                                    str_4s = 0;
                                    str_6s = 0;
                                    str_balls = 0;
                                    str_runs = 0;
                                    str_strikerate = 0;
                                    currwickets += 1; // Also update wickets for bowler!
                                    balls+=1;
                                    currbowler_balls+=1;
                                    currbowler_overs=ballsToOvers(currbowler_balls);
                                    team1_wickets++;
                                    firstinn_batters[no_of_wickets].striker=striker;
            firstinn_batters[no_of_wickets].str_runs=str_runs;
            firstinn_batters[no_of_wickets].str_balls=str_balls;
            firstinn_batters[no_of_wickets].str_4s=str_4s;
            firstinn_batters[no_of_wickets].str_6s=str_6s;
            firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            firstinn_bowlers[bowler_number].bowler=bowler;
            firstinn_bowlers[bowler_number].overs=currbowler_overs;
            firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            firstinn_bowlers[bowler_number].wickets=currwickets;
            firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            firstinn_bowlers[bowler_number].maidens=currmaidens;
                                    firstinn_batters[no_of_wickets+1] = new inn_batters(nonstriker, nstr_runs, nstr_balls, nstr_4s, nstr_6s, nstr_strikerate);
                                    if(balls==6)
                                        {
                                            if(Number(currruns_conceded)==0){
                                                currmaidens=1;
                                            }
                                            firstinn_bowlers[bowler_number].bowler=bowler;
            firstinn_bowlers[bowler_number].overs=currbowler_overs;
            firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            firstinn_bowlers[bowler_number].wickets=currwickets;
            firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            firstinn_bowlers[bowler_number].maidens=currmaidens;
                                            let new_bowler=prompt("New Bowler: ");
                                            if(bowler!=new_bowler)
                                            {
                                                currwickets=0;
                                                currmaidens=0;
                                                currbowler_overs=0;
                                                currbowler_balls=0;
                                                curreconomy_rate=0;
                                                currruns_conceded=0;
                                                bowler=new_bowler;
                                            }
                                            bowler_number+=1;
                                            firstinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens);
                                            swapStrikers();
                                            firstinn_batters[no_of_wickets].striker=striker;
            firstinn_batters[no_of_wickets].str_runs=str_runs;
            firstinn_batters[no_of_wickets].str_balls=str_balls;
            firstinn_batters[no_of_wickets].str_4s=str_4s;
            firstinn_batters[no_of_wickets].str_6s=str_6s;
            firstinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            firstinn_batters[no_of_wickets+1].striker=nonstriker;
            firstinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            firstinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            firstinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            firstinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            firstinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
                                        }
                                    overs=ballsToOvers(balls);
                                    if(batting_team==team1_name){
                                        document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
                                        }
                                        else if(batting_team==team2_name){
                                            document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
                                        }
                                    updateScoreboard();

                                }
                                else if(no_of_wickets==9)
                                    {
                                        comment.innerHTML=`<p>${striker} out after taking ${str_runs} runs in ${str_balls} balls.</p>`;
                                        no_of_wickets+=1;
                                        balls+=1;
                                    currbowler_balls+=1;
                                    currbowler_overs = ballsToOvers(currbowler_balls);
                                    overs=ballsToOvers(balls);
                                    firstinn_bowlers[bowler_number].bowler=bowler;
            firstinn_bowlers[bowler_number].overs=currbowler_overs;
            firstinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            firstinn_bowlers[bowler_number].wickets=currwickets;
            firstinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            firstinn_bowlers[bowler_number].maidens=currmaidens;
                                    if(batting_team==team1_name){
                                        document.getElementById("score_display").textContent=`${team1_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team2_name}`;
                                        }
                                        else if(batting_team==team2_name){
                                            document.getElementById("score_display").textContent=`${team2_name}  ${team1_runs}/${team1_wickets} (${overs}) vs ${team1_name}`;
                                        }
                                    updateScoreboard();
                                    balls=13;
                                    }
                            }
                            if(balls>=12 && firstinnings)
                                {
                                    no_of_wickets=0;
                        firstinnings=false;
                        striker = prompt("First Striker:");
                        overs1=overs;
                        str_4s = 0;
                        str_6s = 0;
                        str_balls = 0;
                        str_runs = 0;
                        str_strikerate = 0;
                        secondinn_batters[no_of_wickets]=new inn_batters(striker,str_runs,str_balls,str_4s,str_6s,str_strikerate);
                        nonstriker = prompt("First Non-striker:");
                        nstr_4s = 0;
                        nstr_6s = 0;
                        nstr_balls = 0;
                        nstr_runs = 0;
                        nstr_strikerate = 0;
                        secondinn_batters[no_of_wickets+1]=new inn_batters(nonstriker,nstr_runs,nstr_balls,nstr_4s,nstr_6s,nstr_strikerate);
                        bowler=prompt("First Bowler: ");
                        currwickets=0;
                        overs=0;
                                    currmaidens=0;
                                    currbowler_overs=0;
                                    curreconomy_rate=0;
                                    currruns_conceded=0;
                                    currbowler_balls=0;
                                    balls=0;
                                    bowler_number=0;
                                    secondinn_bowlers[bowler_number]=new inn_bowlers(bowler,currbowler_overs,currruns_conceded,currwickets,curreconomy_rate,currmaidens);
                                    if(batting_team===team1_name){
                                        document.getElementById("score_display").textContent=`${team2_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team1_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        else if(batting_team===team2_name){
                                            document.getElementById("score_display").textContent=`${team1_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team2_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                    updateScoreboard();
                                    el1.classList.remove('hidden');
                                    el1.style.display = 'block';
                                    el1.textContent=6*(team1_runs-team2_runs)/(12-balls).toFixed(2);
                                    el2.classList.remove('hidden');
                                    el2.style.display = 'block';
                                    el2.textContent=0;
                                }
                            if(balls<12 && balls>0 && !firstinnings && !match_over)
                                {
                                if(no_of_wickets <= 8){
                                    comment.innerHTML=`<p>${striker} out after taking ${str_runs} runs in ${str_balls} balls.</p>`;
                                    no_of_wickets += 1;
                                    striker = prompt("New Striker:");
                                    str_4s = 0;
                                    str_6s = 0;
                                    str_balls = 0;
                                    str_runs = 0;
                                    str_strikerate = 0;
                                    currwickets += 1; // Also update wickets for bowler!
                                    balls+=1;
                                    currbowler_balls+=1;
                                    team2_wickets++;
                                    secondinn_batters[no_of_wickets].striker=striker;
            secondinn_batters[no_of_wickets].str_runs=str_runs;
            secondinn_batters[no_of_wickets].str_balls=str_balls;
            secondinn_batters[no_of_wickets].str_4s=str_4s;
            secondinn_batters[no_of_wickets].str_6s=str_6s;
            secondinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            secondinn_bowlers[bowler_number].bowler=bowler;
            secondinn_bowlers[bowler_number].overs=currbowler_overs;
            secondinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            secondinn_bowlers[bowler_number].wickets=currwickets;
            secondinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            secondinn_bowlers[bowler_number].maidens=currmaidens;
                                    if(balls==6)
                                        {
                                            if(Number(currruns_conceded)==0){
                                                currmaidens=1;
                                            }
                                            secondinn_bowlers[bowler_number].bowler=bowler;
            secondinn_bowlers[bowler_number].overs=currbowler_overs;
            secondinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            secondinn_bowlers[bowler_number].wickets=currwickets;
            secondinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            secondinn_bowlers[bowler_number].maidens=currmaidens;
                                            let new_bowler=prompt("New Bowler: ");
                                            if(bowler!=new_bowler)
                                            {
                                                currwickets=0;
                                                currmaidens=0;
                                                currbowler_overs=0;
                                                curreconomy_rate=0;
                                                currruns_conceded=0;
                                                currbowler_balls=0;
                                                bowler=new_bowler;
                                            }
                                            swapStrikers();
                                            secondinn_batters[no_of_wickets].striker=striker;
            secondinn_batters[no_of_wickets].str_runs=str_runs;
            secondinn_batters[no_of_wickets].str_balls=str_balls;
            secondinn_batters[no_of_wickets].str_4s=str_4s;
            secondinn_batters[no_of_wickets].str_6s=str_6s;
            secondinn_batters[no_of_wickets].str_strikerate=str_strikerate;
            secondinn_batters[no_of_wickets+1].striker=nonstriker;
            secondinn_batters[no_of_wickets+1].str_runs=nstr_runs;
            secondinn_batters[no_of_wickets+1].str_balls=nstr_balls;
            secondinn_batters[no_of_wickets+1].str_4s=nstr_4s;
            secondinn_batters[no_of_wickets+1].str_6s=nstr_6s;
            secondinn_batters[no_of_wickets+1].str_strikerate=nstr_strikerate;
                                        }
                                    currbowler_overs = ballsToOvers(currbowler_balls);
                                    overs=ballsToOvers(balls);
                                    if(batting_team==team1_name){
                                        document.getElementById("score_display").textContent=`${team2_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team1_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        else if(batting_team==team2_name){
                                            document.getElementById("score_display").textContent=`${team1_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team2_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        if (overs!=2){
                                            if(team1_runs>=team2_runs)
                                                {
                                                el1.textContent=6*(team1_runs-team2_runs)/(12-balls).toFixed(2);
                                            }
                                            else{
                                                el1.textContent=0;
                                            }
                                            el2.textContent=6*team2_runs/balls.toFixed(2);
                                        }
                                    updateScoreboard();
                                }
                                else if(no_of_wickets==9)
                                    {
                                        comment.innerHTML=`<p>${striker} out after taking ${str_runs} runs in ${str_balls} balls.</p>`;
                                        no_of_wickets+=1;
                                        balls+=1;
                                    currbowler_balls+=1;
                                    currbowler_overs = ballsToOvers(currbowler_balls);
                                    overs=ballsToOvers(balls)+2;
                                    secondinn_bowlers[bowler_number].bowler=bowler;
            secondinn_bowlers[bowler_number].overs=currbowler_overs;
            secondinn_bowlers[bowler_number].runs_conceded=currruns_conceded;
            secondinn_bowlers[bowler_number].wickets=currwickets;
            secondinn_bowlers[bowler_number].economy_rate=curreconomy_rate;
            secondinn_bowlers[bowler_number].maidens=currmaidens;
                                    if(batting_team==team1_name){
                                        document.getElementById("score_display").textContent=`${team2_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team1_name} ${team1_runs}/${team1_wickets} ${overs1}`;
                                        }
                                        else if(batting_team==team2_name){
                                            document.getElementById("score_display").textContent=`${team1_name}  ${team2_runs}/${team2_wickets} (${overs}) vs ${team2_name} ${team2_runs}/${team2_wickets} ${overs1}`;
                                        }
                                        if (overs!=2){
                                            if(team1_runs>=team2_runs)
                                            {
                                            el1.textContent=6*(team1_runs-team2_runs)/(12-balls);
                                        }
                                        else{
                                            el1.textContent=0;
                                        }
                                            el2.textContent=6*team2_runs/balls.toFixed(2);
                                        }
                                    updateScoreboard();
                                    match_over=true;
                                    matchover();
                                    }
                            }
                            });
                            console.log(match_over);
            }
        }
        function go_to_matchsummary(){
            persistState();
            window.location.href="match_summary.html";
        }
        function go_to_scorecard(){
            persistState();
            window.location.href="scorecard.html";
        }
        if(window.location.pathname.includes("scorecard.html")){
            const team1wickets=sessionStorage.getItem('team1wickets');
            console.log('team1_wickets:',team1wickets);
            const team2wickets=sessionStorage.getItem('team2wickets');
            console.log('team2_wickets:',team2wickets);
            const first_innings=JSON.parse(sessionStorage.getItem('firstinnings'));
            const loadedfirst_batters=JSON.parse(sessionStorage.getItem('firstinn_batters'));
            const loadedfirst_bowlers=JSON.parse(sessionStorage.getItem('firstinn_bowlers'));
            const loadedsecond_batters=JSON.parse(sessionStorage.getItem('secondinn_batters'));
            const loadedsecond_bowlers=JSON.parse(sessionStorage.getItem('secondinn_bowlers'));
            const table=document.getElementById("batters");
            const tbody = table.querySelector("tbody");
            const table2=document.getElementById("bowlers");
            const tbody2=table2.querySelector("tbody");
            
            if(first_innings){
                loadedfirst_batters.forEach(batter => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                      <td>${batter.striker}</td>
                      <td>${batter.str_runs}</td>
                      <td>${batter.str_balls}</td>
                      <td>${batter.str_4s}</td>
                      <td>${batter.str_6s}</td>
                      <td>${batter.str_strikerate}</td>
                    `;
                    tbody.appendChild(tr);
                  });
                  loadedfirst_bowlers.forEach(bowler=>{
                    const tr=document.createElement("tr");
                    console.log(bowler.bowler)
                    tr.innerHTML=`
                    <td>${bowler.bowler}</td>
                    <td>${bowler.overs}</td>
                    <td>${bowler.maidens}</td>
                    <td>${bowler.runs_conceded}</td>
                    <td>${bowler.wickets}</td>
                    <td>${bowler.economy_rate.toFixed(2)}</td>
                    `;
                    tbody2.appendChild(tr);
                });
                  }
                  else {
                    loadedsecond_batters.forEach(batter => {
                        const tr = document.createElement("tr");
                        tr.innerHTML = `
                          <td>${batter.striker}</td>
                          <td>${batter.str_runs}</td>
                          <td>${batter.str_balls}</td>
                          <td>${batter.str_4s}</td>
                          <td>${batter.str_6s}</td>
                          <td>${batter.str_strikerate}</td>
                        `;
                        tbody.appendChild(tr);
                      });
                      loadedsecond_bowlers.forEach(bowler=>{
                        const tr=document.createElement("tr");
                        tr.innerHTML=`
                        <td>${bowler.bowler}</td>
                        <td>${bowler.overs}</td>
                        <td>${bowler.maidens}</td>
                        <td>${bowler.runs_conceded}</td>
                        <td>${bowler.wickets}</td>
                        <td>${bowler.economy_rate.toFixed(2)}</td>
                        `;
                        tbody2.appendChild(tr);
                    });
                  }
    } 
if(window.location.pathname.includes("match_summary.html")) 
{
    const team1_runs=JSON.parse(sessionStorage.getItem('team1_runs'));
    const team2_runs=JSON.parse(sessionStorage.getItem('team2_runs'));
    const firstinnings=JSON.parse(sessionStorage.getItem('firstinnings'));
    const team1_wickets=JSON.parse(sessionStorage.getItem('team1wickets'));
    const team2_wickets=JSON.parse(sessionStorage.getItem('team2wickets'));
    const balls=JSON.parse(sessionStorage.getItem('balls'));
    const team1_name = sessionStorage.getItem('team1name');
            const team2_name = sessionStorage.getItem('team2name');
            const t_decision = sessionStorage.getItem('tdecision');
            const t_winner = sessionStorage.getItem('twinner');
            console.log("Team 1:", team1_name);
        console.log("Team 2:", team2_name);
        console.log("Toss Winner:", t_winner);
        console.log("Toss Decision:", t_decision);
        const result=document.getElementById('result');
        if(t_winner=='team1' && t_decision=='Bat'){
            let batting_team=team1_name;
            let bowling_team=team2_name;
            if(team1_runs>team2_runs){
                let margin=team1_runs-team2_runs;
                result.innerHTML=`${team1_name} wins by ${margin} runs`;
            }
            else if(team2_runs>team1_runs){ 
                let left_wickets=10-team2_wickets;
                let left_balls=12-balls;
                result.innerHTML=`${team2_name} wins by ${left_wickets} wickets(${left_balls} balls left)`;
            }
        }
        else if(t_winner=='team2' && t_decision=='Bat'){
            batting_team=team2_name;
            bowling_team=team1_name;
            if(team1_runs>team2_runs){
                let margin=team1_runs-team2_runs;
                result.innerHTML=`${team2_name} wins by ${margin} runs`;
            }
            else if(team2_runs>team1_runs){ 
                let left_wickets=10-team2_wickets;
                let left_balls=12-balls;
                result.innerHTML=`${team1_name} wins by ${left_wickets} wickets(${left_balls} balls left)`;
            }
        }
        else if(t_winner=='team1' && t_decision=='Bowl'){
            batting_team=team2_name;
            bowling_team=team1_name;
            if(team1_runs>team2_runs){
                let margin=team1_runs-team2_runs;
                result.innerHTML=`${team2_name} wins by ${margin} runs`;
            }
            else if(team2_runs>team1_runs){
                let left_wickets=10-team2_wickets;
                let left_balls=12-balls;
                result.innerHTML=`${team1_name} wins by ${left_wickets} wickets(${left_balls} balls left)`;
            }
        }  
        else if(t_winner=='team2' && t_decision=='Bowl'){
            let batting_team=team1_name;
            let bowling_team=team2_name;
            if(team1_runs>team2_runs){
                let margin=team1_runs-team2_runs;
                result.innerHTML=`${team1_name} wins by ${margin} runs`;
            }
            else if(team2_runs>team1_runs){ 
                let left_wickets=10-team2_wickets;
                let left_balls=12-balls;
                result.innerHTML=`${team2_name} wins by ${left_wickets} wickets(${left_balls} balls left)`;
            }
        }
        if(team1_runs==team2_runs)
        {
            result.innerHTML=`The match was a tie.`
        }
}
function reset(){
    sessionStorage.clear();
    window.location.href="setup.html";
}  
