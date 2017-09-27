@votes.each do |vote|
  json.set! vote.id, vote
end
