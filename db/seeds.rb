# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


def create_poets
  poets = [];

  shakespeare = {
    name: "William Shakespeare",
    img_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506015246/shakespeare-67698_640_guxmbj.jpg",
    banner_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506015592/vintage-1721959_1920_lk2fw9.jpg",
    description: "William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet, and the 'Bard of Avon'. His extant works, including collaborations, consist of approximately 38 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright."
  }
  poets.push(shakespeare)

  blake = {
    name: "William Blake",
    img_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506032476/William_Blake_by_Thomas_Phillips_qi0gwn.jpg",
    banner_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506032581/Europe_a_Prophecy__copy_D__object_1__Bentley_1__Erdman_i__Keynes_i__British_Museum_txmvg0.jpg",
    description: "William Blake was an English poet, painter, and printmaker. Largely unrecognised during his lifetime, Blake is now considered a seminal figure in the history of the poetry and visual arts of the Romantic Age. His so-called prophetic works were said by 20th century critic Northrop Frye to form \"what is in proportion to its merits the least read body of poetry in the English language\". His visual artistry led 21st-century critic Jonathan Jones to proclaim him \"far and away the greatest artist Britain has ever produced\". Although he lived in London his entire life (except for three years spent in Felpham), he produced a diverse and symbolically rich œuvre, which embraced the imagination as \"the body of God\" or \"human existence itself\"."
  }
  poets.push(blake)


  dickinson = {
    name: "Emily Dickinson",
    img_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506035096/Black-white_photograph_of_Emily_Dickinson2_rahefy.png",
    banner_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506035259/marthas-988120_1920_puviat.jpg",
    description: "Dickinson was born in Amherst, Massachusetts. Although part of a prominent family with strong ties to its community, Dickinson lived much of her life in reclusive isolation. After studying at the Amherst Academy for seven years in her youth, she briefly attended the Mount Holyoke Female Seminary before returning to her family's house in Amherst. Considered an eccentric by locals, she developed a noted penchant for white clothing and became known for her reluctance to greet guests or, later in life, to even leave her bedroom. Dickinson never married, and most friendships between her and others depended entirely upon correspondence. Dickinson was a recluse for the later years of her life."
  }
  poets.push(dickinson)


  poe = {
    name: "Edgar Allan Poe",
    img_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506036188/portrait-62996_qdufdy.jpg",
    banner_url: "http://res.cloudinary.com/dzqrzline/image/upload/v1506036185/bird-2071185_1920_wiyiev.jpg",
    description: "Edgar Allen Poe was an American writer, editor, and literary critic. Poe is best known for his poetry and short stories, particularly his tales of mystery and the macabre. He is widely regarded as a central figure of Romanticism in the United States and American literature as a whole, and he was one of the country's earliest practitioners of the short story. Poe is generally considered the inventor of the detective fiction genre and is further credited with contributing to the emerging genre of science fiction. He was the first well-known American writer to try to earn a living through writing alone, resulting in a financially difficult life and career."
  }
  poets.push(poe)



  poets.each do |poet|
    Poet.create(poet)
  end
end


def add_poems

end



User.create(username:"shakespeare", password:"tobeornottobe")
create_poets
