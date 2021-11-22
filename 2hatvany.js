

alert ("szia!!")
        function szamol (alap, hatar){
            let alap1=parseInt(alap);
            let hatar1=parseInt(hatar);

            document.write("<table><tr><th>Hatvány</th><th>Érték</th></tr>");
            let ertek=1;
            for (i=0; i <= hatar; i++){
                document.write("<tr><td>"+alap+"<sup>"+i+"</sup></td><td>"+ertek+"</td></tr>");
                ertek*= alap;
            }
            document.write("</table>");
        }
   