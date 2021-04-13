Game.destroy_all
Game.reset_pk_sequence
Score.destroy_all
Score.reset_pk_sequence

character = Game.create(image: "Code/Phase4/Bullet-Bills-Excellent-Adventure/backend/images/Bullet_Bill.jpg")
block = Game.create(image: "Code/Phase4/Bullet-Bills-Excellent-Adventure/backend/images/Mario_Pipe.jpg")