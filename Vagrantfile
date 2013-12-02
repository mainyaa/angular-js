# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest: 9000, host: 9000
  config.vm.network :forwarded_port, guest: 9001, host: 9001
  
  config.vm.synced_folder "./", "/vagrant_data", :owner=> 'vagrant', :group=>'vagrant', :mount_options => ['dmode=775','fmode=775']
  
  
  # provision some standard packages
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks", "~/.berkshelf/cookbooks/"]
    chef.log_level = :debug
    chef.json = {
        "rvm" => {
          "rubies"  => ["1.9.2"],
          "global_gems" => [
              { 'name' => 'bundler' },
          ]
        }
      }
  end

  # install node, npm, and our packages
  config.vm.provision :shell, :inline => <<-EOS
    sudo apt-get update
    sudo gem update --system

    cd /vagrant_data
    sudo gem install haml
    sudo gem install compass
    npm install -g grunt-cli
    npm install -g bower
    npm install -g yo
    npm install -g karma
    npm install
    bower install
    grunt server

    echo 'please open http://localhost:9000/'
    
  EOS
end
