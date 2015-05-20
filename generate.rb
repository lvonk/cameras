Dir.glob("img/*.JPG").map { |f| File.basename(f, ".JPG") }.each_slice(2) do |p|
  puts "\"#{p[0]}\": \"#{p[1]}\","
end
