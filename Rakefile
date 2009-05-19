task :deploy do
  `rm -rf ../../sc-rails/public/static`
  `sc-build`
  `cp -r tmp/build/static ../../sc-rails/public/`
end

task :clean do
  files=Dir["**/*~"]
  puts "Removing #{files.size} Emacs temp file#{(files.size==1?'':'s')}"
  files.each do |tmp|
    FileUtils.rm tmp
  end
end
