Game.destroy_all
Game.reset_pk_sequence
Score.destroy_all
Score.reset_pk_sequence

character = Game.create(image: "/home/mattmrak/Development/Code/Phase4/Bullet-Bills-Excellent-Adventure/backend/images/Bullet_Bill.jpg")
block = Game.create(image: "https://p.kindpng.com/picc/s/203-2032468_8-bit-mario-pipe-hd-png-download.png")

Score.create(name: "Gigi", amount: "10")