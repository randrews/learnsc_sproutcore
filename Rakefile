task :deploy do
  `rm -rf ../../sc-rails/public/static`
  `sc-build`
  `cp -r tmp/build/static ../../sc-rails/public/`
end
