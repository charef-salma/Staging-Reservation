
# staging_reservation

Web app to manage the staging reservation in the Team IT



## Description

The project was initiated to eliminate the need for manual notifications in Google Space chat when a staging server is being utilized. It aimed to automate this process, streamlining communication and enhancing efficiency


## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

# Installation
set up the environment for the App
### Installing Ruby

```bash
sudo apt-get update
sudo apt-get install git-core zlib1g-dev
build-essential libssl-dev libreadline-dev
libyaml-dev libsqlite3-dev sqlite3  
libxml2-dev libxslt1-dev libcurl4-openssl-dev  
software-properties-common libffi-dev
```
Next we're going to be installing Ruby using a version manager called ASDF.

Installing asdf is a simple two step process. First you install asdf, and then add it to your shell:

```bash
cd
git clone https://github.com/excid3/asdf.git ~/.asdf
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc
echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.bashrc
echo 'legacy_version_file = yes' >> ~/.asdfrc
echo 'export EDITOR="code --wait"' >> ~/.bashrc
exec $SHELL
```
Then we can install ASDF plugins for each language we want to use. For Rails, we can install Ruby


```bash
asdf plugin add ruby
``` 
To install Ruby and set the correct version,

```bash
asdf install ruby 2.7.8
asdf global ruby 2.7.8

# Update to the latest Rubygems version
gem update --system
```
Confirm the default Ruby version matches the version you just installed. 


```bash
which ruby
#=> /home/username/.asdf/shims/ruby
ruby -v
#=> 2.7.8
```
### Installing Rails

we will install the 6.0.6.1 version of rails to install 


```bash
gem install rails -v 6.0.6.1
```
Now that you've installed Rails, you can run the rails -v command to make sure you have everything installed correctly

```bash
rails -v
# Rails 6.0.6.1
```
If you get a different result for some reason, it means your environment may not be setup properly.

###  Installing Node Using the Node Version Manager(nvm) and npm

```bash
sudo apt update
sudo apt install  npm
```

This will install the nvm script

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
``` 
 To use it, you must first source your .bashrc file:

```bash
source ~/.bashrc
```
ask NVM which versions of Node are available

```bash
nvm list-remote
```
In this project, 16.14.2 will be used

```bash
nvm install v16.14.0
```
You can verify that the install was successful using the same technique from the other sections, by typing:

```bash
node -v
```
You can see the different versions you have installed by typing:

```bash
nvm list
```
 ### Install Angular CLI 

```bash
npm install -g @angular/cli"
```
### Install PostgreSQL Server
 run the system update command, once.

```bash
sudo apt update && sudo apt upgrade
```
Install PostgreSQL Server

```bash
sudo apt install postgresql
```
The above command will install the latest stable version of PostgreSQL, if you want to install some old version of it then you have to mention the same in the command.

In our case , we will install the version 14

```bash
sudo apt install postgresql-14
```
Check Service Status and Port

```bash
systemctl status postgresql
```

### Integrtaion of PostgreSQL
 Create user 
```bash
 Create user rubyuser2 with encrypted password 'rubyuser';
 Create user rubyuser with encrypted password 'rubyuser';
 
```
 Change user rights
```bash
 ALTER ROLE rubyuser2 WITH Superuser;
 ALTER ROLE rubyuser WITH Superuser;
```
 Connect your Rails application with the PostgreSQL development and testing database
```bash
$ rails db:create
```

## Usage

```bash
git clone "https://github.com/charef-salma/Staging-Reservation.git"
```
    


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)






