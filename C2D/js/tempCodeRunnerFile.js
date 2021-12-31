let cx=p.pos_x;
        let cy=p.pos_y
        let r=p.r
        if(r>0){

            
            let g = this.createRadialGradient(cx,cy,r,0,0,0 );
            g.addColorStop(0.3, "red");
            g.addColorStop(0, "orange");
            this.fillStyle = g;
            this.beginPath();
            this.moveTo(cx-r,cy);
            this.arcTo(cx-r,cy-r,cx,cy-r,r);
            this.arcTo(cx+r,cy-r,cx+r,cy,r);
            this.arcTo(cx+r,cy+r,cx,cy+r,r);
            this.arcTo(cx-r,cy+r,cx-r,cy,r);
            this.fill();
        }